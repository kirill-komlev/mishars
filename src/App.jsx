import { useState } from 'react'

import { logo, name } from '../config'

import { data } from './assets/data/data'

export default function App() {
	const [clothes, setClothes] = useState('male')

	return (
		<>
			<header className='header'>
				<div className='header__inner container'>
					<a
						href='#'
						className='header__logo-link'
					>
						<img
							src={logo}
							alt=''
							className='header__logo-img'
						/>
					</a>
					<nav className='header__menu'>
						<ul className='header__list'>
							<li className='header__list-item'>
								<a
									href='#history'
									className='header__list-link'
								>
									История
								</a>
							</li>
							<li className='header__list-item'>
								<a
									href='#tradition'
									className='header__list-link'
								>
									Традиции
								</a>
							</li>
							<li className='header__list-item'>
								<a
									href='#clothes'
									className='header__list-link'
								>
									Одежда
								</a>
							</li>
							<li className='header__list-item'>
								<a
									href=''
									className='header__list-link'
								>
									Народное творчество
								</a>
							</li>
							<li className='header__list-item'>
								<a
									href=''
									className='header__list-link'
								>
									Жизнь и быт
								</a>
							</li>
							<li className='header__list-item'>
								<a
									href=''
									className='header__list-link'
								>
									Народные промыслы
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<main>
				<div className='intro background-tint'>
					<div className='intro__inner container'>
						<h1 className='intro__title'>Мишари</h1>
						<h4 className='intro__text'></h4>
					</div>
				</div>
				<section
					className='history'
					id='history'
				>
					<div className='history__inner inner container'>
						<h2 className='history__title'>История и происхождение</h2>
						<p className='history__text'>{data.history}</p>
						<p className='introduction__text'>{data.introduction}</p>
						<div className='introduction__map image'>
							<img
								src={new URL('../images/map.png', import.meta.url).href}
								alt=''
								className='introduction__image'
							/>
							<h5 className='introduction__subtitle'>Карта Татарстана</h5>
						</div>
						<h3 className='origin__title'>Происхождение</h3>
						{data.origin.map((item, index) => (
							<p
								className='origin__text'
								key={index}
							>
								{item}
							</p>
						))}
						<h3 className='cultural__title'>Культурные особенности</h3>
						{data.cultural.map((item, index) => (
							<p
								className='cultural__text'
								key={index}
							>
								{item}
							</p>
						))}
						<div className='our-time'>
							<div className='our-time__info inner'>
								<h3 className='our-time__title'>Современное положение</h3>
								{data.our_time.map((item, index) => (
									<p
										className='our-time__text'
										key={index}
									>
										{item}
									</p>
								))}
							</div>

							<div className='our-time__image-group image'>
								<img
									src={new URL('../images/man.png', import.meta.url).href}
									alt=''
									className='our-time__image'
								/>
								<h5 className='our-time__subtitle'>Дамир Мавлявеевич Исхаков — советский и российский учёный, этнограф.</h5>
							</div>
						</div>

						<div className='flag reverse'>
							<div className='flag__info inner'>
								<h3 className='flag__title'>Флаг</h3>
								<p className='flag__text'>{data.flag}</p>
							</div>

							<div className='flag__image-group image'>
								<img
									src={new URL('../images/flag.jpg', import.meta.url).href}
									alt=''
									className='flag__image'
								/>
								<h5 className='flag__subtitle'>Флаг Татарстана</h5>
							</div>
						</div>

						<div className='gerb'>
							<div className='gerb__info inner'>
								<h3 className='gerb__title'>Герб Татарстана</h3>
								{data.gerb.map((item, index) => (
									<p
										className='gerb__text'
										key={index}
									>
										{item}
									</p>
								))}
							</div>

							<div className='gerb__image-group image'>
								<img
									src={new URL('../images/gerb.png', import.meta.url).href}
									alt=''
									className='gerb__image'
								/>
								<h5 className='gerb__subtitle'>Герб Татарстана</h5>
							</div>
						</div>
					</div>
				</section>
				<section
					className='tradition'
					id='tradition'
				>
					<div className='tradition__inner inner container'>
						<h2 className='tradition__title'>Традиции мишар </h2>
						<h3 className='music-dance'>Музыка и танцы</h3>
						<p className='music-dance__text'>{data.tradition.music}</p>
						<p className='music-dance__text'>{data.tradition.dance}</p>

						<div className='holidays'>
							<div className='holidays__info inner'>
								<h3 className='holidays__title'>Праздники</h3>
								{data.holidays.map((item, index) => (
									<p
										className='holidays__text'
										key={index}
									>
										{item}
									</p>
								))}
							</div>

							<div className='holidays__image-group image'>
								<img
									src={new URL('../images/women.png', import.meta.url).href}
									alt=''
									className='holidays__image'
								/>
								<h5 className='holidays__subtitle'>Проведения Йомырка-Байрама</h5>
							</div>
						</div>

						<div className='games reverse'>
							<div className='games__info inner'>
								<h3 className='games__title'>Народные игры</h3>
								{data.games.map((item, index) => (
									<p
										className='games__text'
										key={index}
									>
										{item}
									</p>
								))}
							</div>

							<div className='games__image-group image'>
								<img
									src={new URL('../images/games.png', import.meta.url).href}
									alt=''
									className='games__image'
								/>
								<h5 className='games__subtitle'>Перетягивание каната</h5>
							</div>
						</div>

						<h3 className='rites'>Религиозные обряды </h3>
						{data.rites.map((item, index) => (
							<p
								className='rites__text'
								key={index}
							>
								{item}
							</p>
						))}
					</div>
				</section>
				<section
					className='clothes'
					id='clothes'
				>
					<div className='clothes__inner inner container'>
						<h2 className='clothes__title'>Народная одежда</h2>
						<p className='clothes__text'>{data.clothes.text}</p>
						<div className='clothes__buttons'>
							<button
								className='button'
								onClick={() => setClothes('male')}
							>
								Мужские народные одеяния
							</button>
							<button
								className='button'
								onClick={() => setClothes('female')}
							>
								Женские народные одеяния
							</button>
						</div>
						{clothes === 'male' ? (
							<>
								<div className='clothes reverse'>
									<div className='clothes__info male'>
										<h3 className='clothes__info-title'>Мужские народные одеяния </h3>
										<ul className='clothes__info-list'>
											{data.clothes.male.map((item, index) => (
												<li
													className='clothes__info-item'
													key={index}
												>
													{item}
												</li>
											))}
										</ul>
									</div>
									<div className='clothes__image-group image'>
										<img
											src={new URL('../images/clothes_male.png', import.meta.url).href}
											alt=''
											className='clothes__image'
										/>
										<h5 className='clothes__subtitle'>Мужские народные одеяния</h5>
									</div>
								</div>

								<h3 className='clothes__heads-title'>Головные уборы</h3>
								<p className='clothes__info-item'>{data.clothes.heads.male}</p>

								<h3 className='clothes__costumes-title'>Костюмы</h3>
								<p className='clothes__costumes-item'>{data.clothes.costumes.male}</p>
							</>
						) : (
							<>
								<div className='clothes reverse'>
									<div className='clothes__info female'>
										<h3 className='clothes__info-title'>Женские народные одеяния </h3>
										<ul className='clothes__info-list'>
											{data.clothes.female.map((item, index) => (
												<li
													className='clothes__info-item'
													key={index}
												>
													{item}
												</li>
											))}
										</ul>
									</div>
									<div className='clothes__image-group image'>
										<img
											src={new URL('../images/clothes_female.png', import.meta.url).href}
											alt=''
											className='clothes__image'
										/>
										<h5 className='clothes__subtitle'>Женские народные одеяния</h5>
									</div>
								</div>

								<h3 className='clothes__heads-title'>Головные уборы</h3>
								<p className='clothes__info-item'>{data.clothes.heads.female[0]}</p>
								<p className='clothes__info-item'>{data.clothes.heads.female[1]}</p>

								<h3 className='clothes__costumes-title'>Костюмы</h3>
								<p className='clothes__costumes-item'>{data.clothes.costumes.female}</p>
							</>
						)}
						<h3 className='clothes__shoes-title'>Обувь</h3>
						<p className='clothes__shoes-item'>{data.clothes.shoes}</p>

						<h3 className='clothes__embroidery-title'>Вышивка</h3>
						<div className='clothes_embroidery'>
							<div className='clothes_embroidery-info inner'>
								<p className='clothes__embroidery-item'>{data.clothes.embroidery[0]}</p>
								<p className='clothes__embroidery-item'>{data.clothes.embroidery[1]}</p>
							</div>
							<div className='clothes__embroidery-group image'>
								<img
									src={new URL('../images/embroidery.png', import.meta.url).href}
									alt=''
									className='clothes__embroidery'
								/>
								<h5 className='clothes__subtitle'>Народная вышивка</h5>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
