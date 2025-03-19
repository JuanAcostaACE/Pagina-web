document.addEventListener('DOMContentLoaded', function() {
    const inicioBtn = document.getElementById('inicioBtn');
    const xboxBtn = document.getElementById('xboxBtn');
    const playstationBtn = document.getElementById('playstationBtn');
    const nintendoBtn = document.getElementById('nintendoBtn');

    const recomendaciones = document.getElementById('recomendaciones');
    const juegoSeleccionado = document.getElementById('juegoSeleccionado');
    const carrito = document.getElementById('carrito');
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    const comprarBtn = document.getElementById('comprarBtn');

    let carritoItems = [];

    mostrarRecomendaciones();

    inicioBtn.addEventListener('click', function() {
        mostrarRecomendaciones();
    });

    xboxBtn.addEventListener('click', function() {
        mostrarJuego('xbox');
    });

    playstationBtn.addEventListener('click', function() {
        mostrarJuego('playstation');
    });

    nintendoBtn.addEventListener('click', function() {
        mostrarJuego('nintendo');
    });

    carritoBtn.addEventListener('click', function() {
        carrito.style.display = carrito.style.display === 'block' ? 'none' : 'block';
    });

    comprarBtn.addEventListener('click', function() {
        alert('¡Compra realizada con éxito!');
        carritoItems = [];
        actualizarCarrito();
        carrito.style.display = 'none';
    });

    window.agregarAlCarrito = function(nombre, precio) {
        carritoItems.push({ nombre, precio });
        actualizarCarrito();
    };

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;
        carritoItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;
            listaCarrito.appendChild(li);
            total += item.precio;
        });
        totalCarrito.textContent = `Total: $${total}`;
    }

    function mostrarRecomendaciones() {
        recomendaciones.style.display = 'block';
        juegoSeleccionado.style.display = 'none';
        recomendaciones.innerHTML = `
            <h2>Juegos más vendidos</h2>
            <div class="juego">
                <img src="images/halo-infinite.jpg" alt="Halo Infinite">
                <h3>Halo Infinite (Xbox)</h3>
                <p>Uno de los juegos más vendidos de Xbox.</p>
            </div>
            <div class="juego">
                <img src="images/spiderman.jpg" alt="Spiderman">
                <h3>Spiderman (PlayStation)</h3>
                <p>Uno de los juegos más vendidos de PlayStation.</p>
            </div>
            <div class="juego">
                <img src="images/mario-odyssey.jpg" alt="Mario Odyssey">
                <h3>Mario Odyssey (Nintendo)</h3>
                <p>Uno de los juegos más vendidos de Nintendo.</p>
            </div>
        `;
    }

    function mostrarJuego(plataforma) {
        recomendaciones.style.display = 'none';
        juegoSeleccionado.style.display = 'block';
        if (plataforma === 'xbox') {
            juegoSeleccionado.innerHTML = `
                <div class="juego">
                    <img src="images/halo-infinite.jpg" alt="Halo Infinite">
                    <h3>Halo Infinite</h3>
                    <p>Descripción de Halo Infinite.</p>
                    <button onclick="agregarAlCarrito('Halo Infinite', 50)">Agregar al carrito - $50</button>
                </div>
            `;
        } else if (plataforma === 'playstation') {
            juegoSeleccionado.innerHTML = `
                <div class="juego">
                    <img src="images/spiderman.jpg" alt="Spiderman">
                    <h3>Spiderman</h3>
                    <p>Descripción de Spiderman.</p>
                    <button onclick="agregarAlCarrito('Spiderman', 60)">Agregar al carrito - $60</button>
                </div>
            `;
        } else if (plataforma === 'nintendo') {
            juegoSeleccionado.innerHTML = `
                <div class="juego">
                    <img src="images/mario-odyssey.jpg" alt="Mario Odyssey">
                    <h3>Mario Odyssey</h3>
                    <p>Descripción de Mario Odyssey.</p>
                    <button onclick="agregarAlCarrito('Mario Odyssey', 40)">Agregar al carrito - $40</button>
                </div>
            `;
        }
    }
});