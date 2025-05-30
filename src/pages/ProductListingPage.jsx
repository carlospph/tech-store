 	import { Card } from "../components/card/Card";
import { FilterGroups } from "../components/filterGroup/FilterGroups";

export const ProductListingPage = () => {
	return(
		<div className="container__custom">
			<div className="row">
				<div className="col-3">
					<FilterGroups>
						<h4>Filtrar por</h4>

						<label className="d-block">
							<input type="checkbox" name="marca" value="adidas"/>
							Adidas
							</label>
					
						<label className="d-block">		
							<input type="checkbox" name="marca" value="puma"/>
							Puma
							</label>
						<label className="d-block">
						<input type="checkbox" name="marca" value="nike"/>
						Nike
						</label>

						<h5>Categoria</h5>

						<label className="d-block">
							<input type="checkbox" name="categoria" value="esporte"/>
							Esporte e lazer
							</label>
						<label className="d-block">
							<input type="checkbox" name="categoria" value="casual"/>
							Casual
							</label>
						<label className="d-block">
							<input type="checkbox" name="categoria" value="utilitário"/>
							Utilitário
							</label>
						<label className="d-block">
							<input type="checkbox" name="corrida" value="Corrida"/>
							Corrida
							</label>
						<h5>Gênero</h5>

						<h5>Estado</h5>
						</FilterGroups>
				</div>

				<div className="col-9">
					<Card/>
				</div>
			</div>
		</div>
	)
}