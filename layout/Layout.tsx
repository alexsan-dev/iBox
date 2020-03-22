// TIPOS DE DATOS Y HOOKS
import { useEffect, useContext, useState, Dispatch, SetStateAction, FC, useRef, MutableRefObject } from "react";
import { useAuth, showToast, useRipples, sendToken, initFCM } from "../utils/hooks";
import { User } from "firebase";

// VARIABLES GLOBALES ( LENGUAJE, THEMA, USUARIO )
import langContext from "../utils/appContext";
import appContext from "../utils/appContext";

// COMPONENTES, ALERTAS Y LAYOUTS
import Verified from "../components/Verified";
import Footer from "./Footer";
import Topbar from "./Topbar";
import Drawer from "./Drawer";

// INTERFACES PARA LAS PROPIEDADES Y PROVIDER GLOBAL
interface Props { children: any; }
interface userState { user: User | null; cartList?: string[] }

// VARIABLES GLOBALES
let layoutHandler: number = 0;
let cartList: string[] = [];
let topbar: any;

const Layout: FC<Props> = (props: Props) => {
  // EFECTO DE RIPPLES
  useRipples();

  // ESTADOS Y CONEXTO DEL COMPONENTE
  const { lang } = useContext(langContext.langContext);
  const defaultUser: userState = { user: null };
  const stateUser: MutableRefObject<User | null> = useRef(null);
  const [state, setState]: [userState, Dispatch<SetStateAction<userState>>] = useState(defaultUser);
  topbar = useRef(null);

  // AGREGAR AL CARRITO CONTEXTO
  const addToCartEvent = async (key: string, mode: boolean, reset?: boolean) => {
    if (mode) cartList.push(key);
    else {
      const rIndex = cartList.indexOf(key);
      if (rIndex > -1) cartList.splice(rIndex, 1);
    }
    window.localStorage.setItem("cart", cartList.join());
    if (topbar.current) topbar.current.callRender(cartList.length);
    if (reset) {
      window.localStorage.setItem("cart", "");
      cartList = [];
      topbar.current.callRender(0);
    }

    setState({ user: stateUser.current || null, cartList })
  }

  // DETECTAR CAMBIOS EN EL INCIO DE SESION
  useAuth((getUser: User) => {
    if (layoutHandler === 0 && !getUser) return 0;
    stateUser.current = getUser;
    setState({ user: getUser, cartList })
    layoutHandler++;
  });

  useEffect(() => {
    // ESTADO DE CONEXION
    const online = navigator.onLine;

    // MOSTRAR ALERTA CUANDO RECUPERO LA CONEXION
    window.addEventListener("online", () => showToast({ text: lang.toast.online }));
    // MOSTRAR ALERTA CUANDO PERDIO LA CONEXION
    window.addEventListener("offline", () => showToast({ text: lang.toast.offline }));

    // DETECTAR CONEXION AL ENTRAR
    if (!online) showToast({ text: lang.toast.online });

    // PEDIR PERMISO PARA NOTIFICAR
    const messaging = initFCM();
    if (messaging) messaging.requestPermission()
      .then(async function () {
        // OBTENER TOKEN
        const token: string | undefined = await messaging?.getToken();

        // ENVIAR TOKEN AL SERVIDOR
        if (!window.localStorage.getItem("token"))
          sendToken(token || "")
            .then(() => window.localStorage.setItem("token", token || ""));
      })

      // NO EXISTE PERMISO DEL USUARIO
      .catch(function (err: Error) {
        console.log("Unable to get permission to notify.", err);
      });

    // ASIGNAR CARRITO ACTUAL
    setTimeout(() => {
      const cartListLS = window.localStorage.getItem("cart");
      if (cartListLS && cartListLS?.length > 1) cartList = window.localStorage.getItem("cart")?.split(",") || [];
      topbar.current.callRender(cartList.length)
      setState({ user: stateUser.current || null, cartList })
    }, process.env.NODE_ENV === "development" ? 0 : 2000)
  }, []);

  return (
    <>
      <nav>
        <Topbar ref={topbar} placeHolder={lang.placeholders.searchPlaceholder} />
        <Drawer strings={lang.general} user={state.user} />
      </nav>

      <appContext.appContext.Provider value={{ lang, theme: "light", user: state.user, addToCartEvent, cartList: state.cartList || [] }}>
        {state.user && <Verified strings={lang.verified} show={state.user.providerData[0]?.providerId === "facebook.com" ? true : state.user.emailVerified} />}
        <main>
          {props.children}
        </main>
      </appContext.appContext.Provider>

      <Footer {...lang.footer} />

      <style jsx>{`
          nav {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;
            background: var(--backgrounds);
          }  

          main{
            overflow:hidden;
          }

          @media screen and (min-width:460px){
            main{
              width:90%;
              margin:0 auto;
              overflow:unset;
            }
          }
      `}</style>
    </>
  );
};
export default Layout;
