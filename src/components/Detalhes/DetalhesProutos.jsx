import './DetalhesProutos.css';

import { Button } from "../button/Button";

function DetalhesProutos() {
	return (
		<div className="container mt-5 pb-4">
			<div className="row">
				<div className="col-12 col-md-6">
					<img
						src="https://images.pexels.com/photos/9252069/pexels-photo-9252069.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						className="w-100 hh-100 object-fit-cotain"
						alt="imagem principal"
					/>
					<div className="d-flex justify-content-between gap-1 mt-4">
						<div className="bg-danger w-100 text-center cursor-pointer">
						<img src="https://images.unsplash.com/photo-1552346053-c33aa8b3d665?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="thumber"/>
						</div>
						<div className="bg-danger w-100 text-center cursor-pointer">
							<img src="https://images.unsplash.com/photo-1695753648663-72cc4dd99449?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="thumber"/>
						</div>
						<div className="bg-danger w-100 text-center cursor-pointer">
						<img src="https://images.unsplash.com/photo-1698611028521-4c284ca88b11?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="thumber"/>	
						</div>
						<div className="bg-danger w-100 text-center cursor-pointer">
							<img src="https://images.unsplash.com/photo-1695830110251-b9d9cac2ce9d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="thumber"/>
						</div>
						<div className="bg-danger w-100 text-center cursor-pointer">
						<img src="https://images.unsplash.com/photo-1700853006150-05595d465c6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="thumber"/>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-6">
					<h3 className="title__detail__product mt-5 mt-md-0"> Tênis Nike Revolution 6 Next Nature Masculino</h3>

					<p className="ref__detail__product"> Casual | Nike | REF:38416711</p>

					<div className="icones__favoritos d-flex gap-2">
						<i className="fa-solid fa-star text-warning"></i>
						<i className="fa-solid fa-star text-warning"></i>
						<i className="fa-solid fa-star text-warning"></i>
						<i className="fa-regular fa-star text-warning"></i>
					</div>

				<h5 className="py-4"><span className="simbolo__moeda"> R$ </span><span className="detail__price">299,99</span></h5>

					<h6 className="fw-bold title__siz  title__desc__detail"> Descrição do produto </h6>

					<p className="description__detail">
						O Tênis Nike Revolution 6 Next Nature Masculino é uma escolha
						perfeita para quem busca conforto e estilo. Feito com materiais de alta qualidade, ele oferece amortecimento avançado e suporte durante longas caminhadas ou corridas.
					</p>

					<div>
						<h5 className="title__size mt-5">Tamanho</h5>

						<div className="d-flex gap-2">
							<div className="bg-white px-3 rounded text-center py-3">
								36
							</div>
							<div className="bg-white px-3 rounded text-center py-3">
								37
							</div>
							<div className="bg-white px-3 rounded text-center py-3">
								38
							</div>
							<div className="bg-white px-3 rounded text-center py-3">
								39
							</div>
							<div className="bg-white px-3 rounded text-center py-3">
								40
							</div>
						</div>
					</div>

					<div>
						<h5 className="mt-2 title__size">Cores</h5>

						<div className="d-flex gap-2">
							<div className="bg-dark radioSize">
								 
							</div>
							<div className="bg-primary radioSize">
								 
							</div>
							<div className="bg-danger radioSize">
								 
							</div>
							<div className="bg-success radioSize">
								 
							</div>
							<div className="bg-white  radioSize">
								 
							</div>
						</div>

						<Button>
							Comprar
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetalhesProutos;
