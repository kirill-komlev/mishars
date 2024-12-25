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
									href='#creation'
									className='header__list-link'
								>
									Народное творчество
								</a>
							</li>
							<li className='header__list-item'>
								<a
									href='#live'
									className='header__list-link'
								>
									Жизнь и быт
								</a>
							</li>
							<li className='header__list-item'>
								<a
									href='#crafts'
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
				<section
					className='creation'
					id='creation'
				>
					<div className='creation__inner inner container'>
						<h2 className='creation__title'>Народное творчество и фольклор</h2>
						<p className='creation__text'>
							Первоначально все искусство было народным; с общественным разделением труда и выделением ремесел появилось профессиональное искусство. Художественная система и
							орнаментальный язык татарского народного искусства восходят к культуре древнетюркских племен
						</p>
						<div className='creation'>
							<div className='creation__info inner'>
								<h3>Фольклор</h3>
								<p>
									Татарский фольклор — характерными жанрами являются эпос, сказки, легенды, баиты, песни, загадки, пословицы и поговорки. Распространение получили баиты,
									своеобразный жанр, присущий татарской народной поэзии и по своей сущности близкий к балладам. Баиты носят лиро-эпический характер, повествуют о чрезвычайных,
									трагических, исторических событиях, судьбах отдельных людей.
								</p>
							</div>

							<div className='creation__image-group image'>
								<img
									src={new URL('../images/creation.png', import.meta.url).href}
									alt=''
									className='creation__image'
								/>
								<h5 className='creation__subtitle'>Сказка в стихах Габдулы Тукая: Су анасы</h5>
							</div>
						</div>

						<div className='creation reverse'>
							<div className='creation__info inner'>
								<h3>Легенды </h3>
								<p>
									Абзар иясе – хозяин хлева, обитающий на дворе или в хлеву. Он – властелин скота. Иногда Абзар иясе показывается людям в образе человека или животных, но только
									издали и ночью.
								</p>
								<p>
									Аждаха – дракон, чудовищный змей, демоническое создание, оборотень, обитающее в лесной чаще, в горах, в реках, озёрах и болотах. Он может быть многоголовым и с
									огнедышащей пастью.
								</p>
								<p>Ак-барс. Однажды татарский мальчик-сирота, родившийся в Казани, заблудился в далёких лесах и горах.</p>
							</div>

							<div className='creation__image-group image'>
								<img
									src={new URL('../images/dragon.png', import.meta.url).href}
									alt=''
									className='creation__image'
								/>
								<h5 className='creation__subtitle'>Аждаха – дракон, чудовищный змей</h5>
							</div>
						</div>

						<div className='creation'>
							<div className='creation__info inner'>
								<h3>Баиты </h3>
								<p>
									специфические произведения эпического, лирического или плакательного жанров, созданные по случаю какого-либо чрезвычайного, трагического события в жизни народа
									или отдельного человека. Для них характерна своеобразная мелодия и исполнение в форме речитатива.
								</p>
							</div>

							<div className='creation__image-group image'>
								<img
									src={new URL('../images/bait.png', import.meta.url).href}
									alt=''
									className='creation__image'
								/>
								<h5 className='creation__subtitle'>Баиты</h5>
							</div>
						</div>

						<h3>Сказки</h3>
						<p>
							Наиболее древними жанрами народного творчества являются сказки, самыми древними персонажами которых являлись Койгорыш (птица счастья) и Акбузат (белый конь), которые
							сопутствовали героям. Все звери сказок относятся к фауне Среднего Поволжья. Это, чаще всего, волк, лиса, медведь, заяц.
						</p>
					</div>
				</section>

				<section
					className='live'
					id='live'
				>
					<div className='live__inner inner container'>
						<h2>Жизнь и быт </h2>
						<p>
							У татарского народа есть формировавшийся веками семейный уклад. В доме отец всегда главный, его воля — закон. Следующая по значимости роль отводится жёнам и матерям.
							Детей в татарской семье всегда учат помогать нуждающимся и с уважением относиться к старшим. 
						</p>

						<div className='life'>
							<div className='life__info inner'>
								<h3>Сельское хозяйство </h3>
								<p>Основной источник дохода татара-мишар является - выращивание зерновых, картофель, овощей и фруктов.</p>
							</div>

							<div className='life__image-group image'>
								<img
									src={new URL('../images/workers.png', import.meta.url).href}
									alt=''
									className='life__image'
								/>
								<h5 className='life__subtitle'>Рабочие</h5>
							</div>
						</div>

						<div className='life reverse'>
							<div className='life__info inner'>
								<h3>Жилище </h3>
								<p>
									Традиционным домом у этноса была не юрта или кибитка, как у других тюрков, а деревянная изба. Её делили на две части шторой, а с XIX века — перегородкой. В
									мужской половине избы принимали гостей, занимались ремёслами, трапезничали, а в женской чаще всего находилась кухня с печкой. Спали на нарах — длинных дощатых
									настилах вдоль стены.
								</p>
								<p>
									В татарском жилище есть два обязательных атрибута. Первый — шамаиль на стене. Это любой небольшой отрывок из Корана. Второй атрибут жилья — сундуки красного и
									зелёного цвета, в которых татары по традиции хранили приданое.
								</p>
							</div>

							<div className='life__image-group image'>
								<img
									src={new URL('../images/home.png', import.meta.url).href}
									alt=''
									className='life__image'
								/>
								<h5 className='life__subtitle'>Жилище</h5>
							</div>
						</div>
						<h3>Быт</h3>
						<p>
							У татарского народа есть формировавшийся веками семейный уклад. В доме отец всегда главный, его воля — закон. Следующая по значимости роль отводится жёнам и матерям.
							Детей в татарской семье всегда учат помогать нуждающимся и с уважением относиться к старшим.
						</p>
					</div>
				</section>

				<section
					className='crafts'
					id='crafts'
				>
					<div className='crafts__inner inner container'>
						<h2>Народные промыслы и ремесла</h2>
						<p>
							На протяжении многих веков традиционными промыслами татар являются ювелирное искусство, золотное шитьё, кожаная мозаика, тамбурная вышивка, закладное ткачество,
							деревообработка и валяльно-войлочный промысел
						</p>
						<div className='crafts_live'>
							<div className='crafts_live__info inner'>
								<h3>Ручное ковроделие </h3>
								<p>
									старинный народный художественный промысел существует с тех пор, как человек научился вырабатывать пряжу и ткани из волокнистых материалов. О древности культуры
									ковроткачества свидетельствуют памятники глубокой старины – ковры, хранящиеся в музейных коллекциях, а также записи географов и историков.
								</p>
							</div>

							<div className='crafts_live__image-group image'>
								<img
									src={new URL('../images/parket.png', import.meta.url).href}
									alt=''
									className='crafts_live__image'
								/>
								<h5 className='crafts_live__subtitle'>Ковроделие</h5>
							</div>
						</div>

						<div className='crafts_live reverse'>
							<div className='crafts_live__info inner'>
								<h3>Золотошвейное искусство </h3>
								<p>
									Этот высокопрофессиональный вид искусства у татар получил развитие как вид художественного ремесла и позднее народного художественного промысла. Старинное золотое
									шитье исполнялось специальными золотыми и серебряными нитями (русская бить, татарская ука) на бархате, реже – на шелковой, хлопчатобумажной, шерстяной или льняной
									основе, а также на коже.
								</p>
							</div>

							<div className='crafts_live__image-group image'>
								<img
									src={new URL('../images/gold.png', import.meta.url).href}
									alt=''
									className='crafts_live__image'
								/>
								<h5 className='crafts_live__subtitle'>Золотошвейное искусство</h5>
							</div>
						</div>

						<div className='crafts_live '>
							<div className='crafts_live__info inner'>
								<h3>Художественное ткачество </h3>
								<p>
									Создание узорных тканей и ковроделие – старинные виды народного художественного творчества, имевшие в быту универсальный характер и существовавшие в виде
									домашнего ремесла и промысла.
								</p>
								<p>Наряду с простыми гладкими тканями создавались богатые узорные изделия, украшенные разнообразным геометрическим орнаментом.</p>
							</div>

							<div className='crafts_live__image-group image'>
								<img
									src={new URL('../images/hud.png', import.meta.url).href}
									alt=''
									className='crafts_live__image'
								/>
								<h5 className='crafts_live__subtitle'>Художественное ткачество</h5>
							</div>
						</div>

						<div className='crafts_live reverse'>
							<div className='crafts_live__info inner'>
								<h3>Лоскутная мозаика </h3>
								<p>
									В 18 веке вечера у женщин проходили за прялкой, пяльцами и ткацким станком. Ткань женщины ткали сами, полотна делали шириной 40 сантиметров, что соответствовало
									крою полотенца или рубахи, чтобы при шитье отходов не оставалось. Постепенно в домашний обиход начали входить недорогие яркие хлопчатобумажные ткани, ширина
									которых составляла 75-80 сантиметров, то есть шире кроя одежды. Мудрые хозяйки оставшимися при крое лоскутками стали удлинять одежду, украшать рубахи, а самые
									мелкие лоскутки сшивались в одно разноцветное полотно.
								</p>
							</div>

							<div className='crafts_live__image-group image'>
								<img
									src={new URL('../images/mosaic.png', import.meta.url).href}
									alt=''
									className='crafts_live__image'
								/>
								<h5 className='crafts_live__subtitle'>Лоскутная мозаика</h5>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className='footer'>
				<div className='footer__inner container'>
					<a
						href='#'
						className='footer__logo-link'
					>
						<img
							src={logo}
							alt=''
							className='footer__logo-img'
							height='32px'
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
									href='#creation'
									className='header__list-link'
								>
									Народное творчество
								</a>
							</li>
							<li className='header__list-item'>
								<a
									href='#live'
									className='header__list-link'
								>
									Жизнь и быт
								</a>
							</li>
							<li className='header__list-item'>
								<a
									href='#crafts'
									className='header__list-link'
								>
									Народные промыслы
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	)
}
