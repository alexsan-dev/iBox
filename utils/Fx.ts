// =============== EFECTOS ===============
// EFECTO RIPPLE PARA TODOS LOS BOTÓNES
export const ripples = () => {
	setInterval(() => {
		// OBTENER TODAS LAS SUPERFICIES
		const surface: NodeListOf<HTMLElement> | null = document.querySelectorAll(
			'.waves'
		) as NodeListOf<HTMLElement>

		// FUNCIÓN DE EFECTO
		const ripple = (el: HTMLElement, e: MouseEvent) => {
			if (el && surface) {
				// PROPIEDADES INICIALES DEL CIRCULO
				const circle: HTMLDivElement = document.createElement('div') as HTMLDivElement
				const maxLarge: number = Math.max(el.clientWidth, el.clientHeight)
				const rectSurface: ClientRect = el.getBoundingClientRect()

				// FUNCIÓN LOGARÍTMICA DEL TIEMPO
				const time: number = Math.log(maxLarge) / Math.log(Math.exp(1)) / 11

				// APLICAR DIMENSIONES Y ESTILO AL CIRCULO
				circle.style.width = circle.style.height = maxLarge + 'px'
				circle.style.left = e.clientX - rectSurface.left - maxLarge / 2 + 'px'
				circle.style.top = e.clientY - rectSurface.top - maxLarge / 2 + 'px'
				circle.classList.add('ripple')
				circle.style.animation = `ripple ${time}s ease-in`

				// AGREGAR CIRCULO A DIVS CON LA CLASE WAVES-DARK
				if (el.classList.contains('waves-dark')) circle.classList.add('ripple-dark')
				el.appendChild(circle)

				// ELIMINAR CIRCULO LUEGO DE *TIME* SEGUNDOS
				setTimeout(() => {
					try {
						el.removeChild(circle)
					} catch (err) {
						console.log(err)
					}
				}, time * 1000)
			}
		}

		// AGREGAR FUNCIÓN RIPPLE A TODAS LAS SUPERFICIES Y VERIFICAR SI YA SE AGREGO ANTES
		for (let i = 0; i < surface.length; i++) {
			if (!surface[i].getAttribute('data-ripple')) {
				surface[i].setAttribute('data-ripple', 'true')
				surface[i].addEventListener('click', (e: MouseEvent) => ripple(surface[i], e))
			}
		}
	}, 10)
}
