import './pagesStyles.css'

export const EstilosNail= ()=>{
    return(
    <main>
        <div className="encabezado">
            <h1 className="encabezado__titulo">Estilos</h1>
        </div>
            
        <section className="section">
            <img className="seccion__imagen--medidas300" src="/images/secciones/degrade600x600.png"alt="degrade"/>
            <div className="articulo">
                <h4 className="articulo__titulo">Degradé</h4>
                <div>
                    <p>Consiste en combinar 2 o más esmaltes de colores de la misma gama o, si lo prefería, de gran contraste (como el blanco y el negro). La unión entre ellos es esfumada suavemente logrando una suave transición de colores.</p>
                    <p>Este estilo tiene variaciones:</p>
                    <ol className="itemLista">
                        <li>Baby boomer ó french faded</li>
                        <li>Degradado</li>
                        <li>Gradiente</li>
                    </ol>                   
                </div>
            </div>       
        </section> 
        <section className="section">    
            <img className="seccion__imagen--medidas300" src="/images/secciones/jelly600x600.png" alt="nailart Jelly"/>
            <div className="articulo">
                <h4 className="articulo__titulo">Jelly</h4>
                <div>
                    <p>En este estilo, los colores elegidos son translucidos, dejando pasar la luz a través de la uña con un tono del color elegido.
                     Pueden usarse tanto en uñas cortas, como lo hacen en el estilo oriental o coreano. Como también con uñas largas, como en la imagen de ejemplo, donde se deja ver claramente dónde termina la placa de la uñas y comienza el borde libre. 
                     Con uñas naturales, esculpidas o postiza transparentes, se obtienen diferentes grado de opacidad. </p>
                    <p>Esta característica se asemeja a las gomas masticables y la gelatina, lo que da origen a su  nombre.</p>
                </div>
            </div>
        </section>
        <section className="section">
            <img className="seccion__imagen--medidas300" src="/images/secciones/Geometrico564x564.jpg" alt="nailart Geometrico"/>
            <div className="articulo">
                <h4 className="articulo__titulo">Geométrico</h4>
                <div>
                    <p>Aquí podemos agrupar distintos diseños donde se realizan lineas y se divide la uña en diferentes partes combinando colores y a veces técnicas como papel dorado, o cintas de colores.</p>
                </div>   
            </div>
        </section> 
        <section className="section">         
            <img className="seccion__imagen--medidas300" src="/images/secciones/AnimalPrint600x600.jpg" alt="nailart Animal Print"/>
            <div className="articulo">
                <h4 className="articulo__titulo">Animal Print</h4>
                <div>
                    <p>¿Podés imaginarte tus uñas con un estampado de leopardo?</p>
                    <p>Con esta técnica no sólo podés tenerlo sino que puede ser de muchos otros estampados animales como:</p>
                        <ul className="itemLista">
                            <li>Tigre</li>
                            <li>Leopardo</li>
                            <li>Cebra</li>
                            <li>Carey</li>
                            <li>Serpiente</li>
                        </ul>
                    <p>Tenemos variedad en realista o no. Pero también se puede combinar las estampas con diferentes colores aunque no precisamente sean los que llevan los animales en la naturaleza. Así podemos tener por ejemplo, una estampa de leopardo con color rosa de fondo. También podés tenerlo en el borde libre como un french de animal print o la mitad de la uña con el diseño, etc. Las combinaciones y decoraciones son ilimitadas.</p>                   
                </div>
            </div>              
        </section>        
        <section className="section">   
            <img className="seccion__imagen--medidas300" src="/images/secciones/chromenail.jpg" alt="nailart Cromado"/>
            <div className="articulo">
                <h4 className="articulo__titulo">Cromados</h4>
                <div>
                    <p>En esta técnica se utilizan polvos con acabado cromado, lo que genera variaciones de tono causadas por el impacto de la luz que las hace muy llamativas.</p>
                    <p>Dentro de ellas tenemos las clásicas esfecto espejo que reflejan la luz dando esa sensacion de espejo.</p>
                    <p>También tenemos las duo cromo en las que se reflejan varios colores contrastantes, dependiendo de como le de la luz.</p>
                </div>
            </div>        
        </section>    
        <section className="section">        
            <img className="seccion__imagen--medidas300" src="/images/secciones/manga600x600.png" alt="nailart Anime"/>
            <div className="articulo">
               <h4 className="articulo__titulo">Animé y Manga</h4>
                <div>
                    <dl>
                        <dt className="itemLista">Animé:</dt>
                        <dd className="itemLista"> aquí se realiza el dibujo con el estilo japones de las series que podemos ver en la televisión. Puede ser cualquiera. Tenemos por ejemplo Dragon Ball,Naruto, Death Note, Sakura entre muchos otros. </dd>
                        <dt className="itemLista">Manga:</dt>
                        <dd className="itemLista">este estilo es similar pero los dibujos son del estilo de las historietas japones donde se realizan los detalles en la gama de blancos y negros para realizar las las lineas definidas como las sombras y luces.</dd>
                    </dl>
                </div>       
            </div>
        </section>
    </main>
    )
}