// NAVEGACIÓN
import Link from 'next/link'

const Slider: React.FC<ILangIndexPage['slider']> = (strings: ILangIndexPage['slider']) => {
	return (
		<div className='mainSlide'>
			<div id='slideTitle'>
				<h2>
					{strings.title} <i className='material-icons'>widgets</i>
				</h2>
				<p>{strings.text}</p>
			</div>

			<div className='slider'>
				<ul>
					<li className='green'>
						<Link href='/404' passHref scroll={false}>
							<a className='catContent waves' title={strings.electroCatTitle}>
								<div className='cardBackground' />
								<div className='catTitle'>
									<h3>{strings.electroCatTitle}</h3>
									<p>{strings.electroCatText}</p>
								</div>
								<i className='material-icons'>memory</i>
							</a>
						</Link>
					</li>

					<li className='red'>
						<Link href='/404' passHref scroll={false}>
							<a className='catContent waves' title={strings.devicesCatTitle}>
								<div className='cardBackground' />
								<div className='catTitle'>
									<h3>{strings.devicesCatTitle}</h3>
									<p>{strings.devicesCatText}</p>
								</div>
								<i className='material-icons'>phonelink_ring</i>
							</a>
						</Link>
					</li>

					<li className='five'>
						<Link href='/404' passHref scroll={false}>
							<a className='catContent waves' title={strings.accessCatTitle}>
								<div className='cardBackground' />
								<div className='catTitle'>
									<h3>{strings.accessCatTitle}</h3>
									<p>{strings.accessCatText}</p>
								</div>
								<i className='material-icons'>headset</i>
							</a>
						</Link>
					</li>
				</ul>
			</div>

			<Link href='/tienda' passHref scroll={false}>
				<a className='waves waves-dark seeMore right' title={strings.button}>
					{strings.button} <i className='material-icons'>arrow_forward</i>
				</a>
			</Link>

			<style jsx>{`
				.mainSlide{
					position:relative;
					margin-top:-25px;
					width:100%;
				}
				.mainSlide > .seeMore{
					z-index:2;
					bottom:-55px;
				}
				#slideTitle{
					padding:0 20px;
				}
				.slider{
					position:relative;
					width:100%;
					overflow-x:scroll;
					padding:20px 0px 0px 40px;
					z-index:3;
				}
				.slider ul{
					position:relative;
					margin-left:-20px;
					width:740px;
					list-style:none;
				}
				.slider ul li{
					align-items:center;
					border-radius:5px;
					width:230px;
					display:inline-block;
					margin-right:15px;
				}
				.slider ul li:before{
					border-radius:10px;
				}
				.slider ul li .catContent{
					position:relative;
					display:flex;
					justify-content:space-between;
					align-items:center;
					padding:22px 20px;
					overflow:hidden;
					border-radius:10px;
				}
				.slider ul li .cardBackground{
					position:absolute;
					top;0;
					left:0;
					width:100%;
					height:100%;
					z-index:-2;
				}
				.slider ul li .catContent:before{
					content:"";
					position:absolute;
					top:0;
					left:0;
					width:100%;
					height:100%;
					z-index:-1;
					background:rgba(0,0,0,.05);
				}
				.slider ul li .catContent .catTitle{
					font-size:1em;
					width:60%;
					color:var(--backgrounds);
				}
				.slider ul li .catContent .catTitle p{
					font-size:0.9em;
				}
				.slider ul li .catContent i{
					font-size:3.5em;
					margin-right:-7px;
					color:var(--backgrounds);
				}
				.slider ul li:nth-child(1) .catContent{
						padding:18px 20px;
				}
				.slider ul li:nth-child(1) .catContent  i{
					font-size:4.5em;
				}
				@media screen and (max-width:355px){
					.mainSlide > .seeMore{
						bottom:-45px;
					}
					.slider ul{
						width:650px;
					}
					.slider ul li{
						width:200px;
					}
				}
				@media screen and (min-width:445px){
          .slider ul{
						width:800px;
					}
					.slider ul li{
						width:250px;
					}
					.mainSlide > .seeMore{
						bottom:-63px;
					}
        }
				@media screen and (min-width:460px){
					.slider{
						width:110%;
						left:-5%;
					}
				}
	   		`}</style>
		</div>
	)
}

export default Slider
