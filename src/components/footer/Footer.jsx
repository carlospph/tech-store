export const Footer = () => {
  return (
      <section className="bg-dark">
        <div className="container py-3 text-white">
          <div className="row">
            <div className="col-12 col-md-2 col-lg-4 pb-4">
              <img
                src="src/assets/logo__bottom.png"
                alt="Logo do rodapé da página - Digital College - imagem em branco"
                className="py-4"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="col-6 col-md-2 col-lg-2">
              <ul>
                <li className="fw-bold py-4">Informação</li>
                <li className="py-1">Sobre DripStore</li>
                <li className="py-1">Segurança</li>
                <li className="py-1">Wishlist</li>
                <li className="py-1">Blog</li>
                <li className="py-1">Trabalhe conosco</li>
                <li className="py-1">Meus Pedidos</li>
              </ul>
            </div>

            <div className="col-6 col-md-2 col-lg-2">
              <ul>
                <li className="fw-bold py-4">Categorias</li>
                <li className="py-1">Camisetas</li>
                <li  className="py-1">Calças</li>
                <li  className="py-1">Bonés</li>
                <li  className="py-1">Headphones</li>
                <li  className="py-1">Tênis</li>
              </ul>
            </div>
            <div className="col-12 col-md-2 col-lg-4">
              <ul>
                <li className="fw-bold py-4">Contato</li>
                <li  className="py-1">
                  Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                  60150-161
                </li>

                <li className="pt-4">(85) 3051-3411</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <hr/>  
            <p className="text-center">
              &copy; 2025 Digital College
            </p>
          </div>
        </div>
      </section>
  );
};
