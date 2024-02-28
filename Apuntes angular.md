
<h2>Instalación, crear nuevo proyecto e iniciarlo</h2>

Para instalar angular y su línea de comandos tendremos que usar el siguiente comando: 

Hay que hacer antes npm init -y para que se cree el package.json y luego npm install para que se instale el package.json y los node_modules

```shell
npm install -g @angular/cli
```

Con esto lo tendremos instalado en el equipo y listo para usar en todos los nuevos proyectos que queramos crear.

Para crear un nuevo proyecto de angular usamos el siguiente comando:

```shell
ng new nombre-de-proyecto
```

Se nos preguntará el sistema de estilo que queramos usar `css/sass/scss/less`

Para iniciar el proyecto usaremos:

```shell
ng serve --open
```

Con este comando iniciaremos el proyecto y si además añadimos `--open` haremos que se abra directamente en el navegador, evitando tener que escribir la ruta a mano o clickar en el enlace de ruta que nos aparece una vez iniciado.

<h2>Extensiones recomendadas</h2>
- Angular Language Service


<h2>Directorio src </h2>
Aquí es donde encontraremos todas las funcionalidades principales de la aplicación.

Tenemos el archivo `styles.css`, que es donde podremos poner estilos generales a los elementos que se muestren en la página.

El archivo `main.ts` será el punto de entrada de la aplicación y que cargará todo lo necesario para que la aplicación se ejecute y muestre todos los componentes que queramos.

En el archivo `index.html` será donde rendericemos la raíz de la aplicación con la ayuda de la etiqueta `<app-root></app-root>`. Aquí será donde se muestren todos los componentes que hayamos creado.


<h2>Directorio app</h2>
En este directorio se encuentran los componentes raíz de la aplicación, sin los cuales esta no podría funcionar. 

<h3>Componentes de Angular</h3>
El componente principal de angular se encuentra en el archivo `app.component.ts`. Aquí es donde se hace la llamada al resto de componentes que queramos usar en nuestra aplicación. 

El componente principal será el siguiente: 

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'pruebas-angular-app';
}
```

Con la primera línea importamos el wrapper `Component`, que nos permitirá dar especificaciones del componente al que queremos hacer referencia.
Dentro de `@Component`, tenemos `selector`, donde indicaremos la etiqueta con la que vamos a usar este componente; con `standalone` indicamos los módulos o componentes que vamos a importar, que se meterán en la siguiente línea en `imports`, de no estar tendríamos que declararlos desde fuera o por separado, y de esta manera podemos indicarlos dentro de `imports`; `templateUrl` es lo que se renderiza, que puede estar en un archivo externo, como en este ejemplo, o meter el contenido aquí dentro directamente; `styleUrl` sigue el mismo concepto que la línea anterior, podemos indicar un archivo externo o escribir el código dentro directamente.

El decorador o wrapper `@Component` se aplicará sobre la clase que le sigue, `AppComponent`. Al ir de seguido entiende que ese es el elemento al que se debe aplicar (?).

<h3>Definición y acceso de propiedades</h3>
Podemos definir propiedades dentro de `AppComponent` y acceder a ellas dentro del template que estemos usando para mostrar la información. Para ello podemos definir una propiedad de la siguiente manera:

```ts
export class AppComponent {
  city = 'Madrid';
}
```

Y posteriormente podremos acceder a esta propiedad que hemos creado así:

```html
<h1>Hola desde {{city}}</h1>
```

Debemos de tener en cuenta que, al igual que en otros frameworks, como `Django`, podremos añadir código JavaScript dentro de las llaves:

```html
<h1>Hola desde {{city.toUpperCase()}}</h1>
```


<h2>Creación de componentes</h2>
Podemos crear un componente usando el siguiente comando desde la terminal:

```shell
ng generate component nombre-componente
```

Este comando nos permitirá crear fácilmente la carpeta con todos los archivos necesarios para nuestro nuevo componente.

*Angular genera los test necesarios para el componente que hayamos creado*

<h3>Enlazado de componentes</h3>
Para poder llamar al componente que hayamos creado desde, por ejemplo, `app.component.ts`, lo haríamos de la siguiente manera:

```ts
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

Como podemos ver primero importamos el componente y después lo añadimos al atributo `imports`. *Poniendo solo el nombre del componente en `imports` se debería crear la línea del `import` automáticamente*

A la hora de crear el componente es importante que prestemos atención al nombre que le pongamos al atributo `selector`, porque ese será el nombre de la etiqueta con la que llamemos a dicho componente.


<h3>if, else, if else</h3>
Podemos usar condicionales, aunque al contrario que en otros frameworks/lenguajes, no es necesario abrir una etiqueta o llaves especiales (como en php o django). Podremos hacerlo de la siguiente manera:

```html
@if (isLoggedIn) {
   <p>Bienvenido, {{ username }}</p>
} @else {
   <p>¡Inicia sesión!</p>
}
```

De esta manera creamos un condicional, usando `@` y dentro pondremos el contenido que queramos que se muestre en caso de que se cumpla.

<h3>Bucle for</h3>
Para hacer un bucle `for` usaremos una sintaxis parecida a la de los condicionales y la de JS:

*Primero le damos un objeto JS*

```ts
export class GamesComponent {
  games = [
    {
      id: 1,
      name: 'Bloodborne'
    },
    {
      id: 2,
      name: 'God of War'
    },
    {
      id: 3,
      name: 'Outer Wilds'
    }
  ];
}
```

*Y después lo recorremos con nuestro bucle en `games.component.html`*

```html
<ul>
    @for (game of games; track game.id) {
        <li>{{game.name}}</li>
    }
</ul>
```

Una cosa especial de angular es que, como podemos ver, añade un `track` después de la sentencia `for`. Esto es porque, al tener que ir recargando elementos, necesita una manera de poder llevar la cuenta o índice del elemento por el que iba. Para esto usará un identificador único, que en este caso será la clave `id`. 

<h3>Estado y Eventos</h3>
Podemos añadir un escuchador de un evento directamente dentro de la etiqueta o elemento que queramos que lleve el evento. Un ejemplo sería el siguiente:

```html
<img
            (click)="greet()"
            src="https://github.com/LuciaPrieto856.png"
            alt="photo"
>
```

El problema aquí sería que estaríamos intentando hacer una llamada a una función que no existe. Creamos un método en el archivo `.ts` correspondiente:

```ts
export class UserComponent {
  username = 'Lucia';
  isLoggedIn = 'true';
  greet(){
    alert('Hola!!');
  }
}
```

De esta manera el evento estaría completo y llamaría al método `greet()`.

Además, cambiar el estado de un atributo es muy fácil, y se puede hacer directamente desde el escuchador del evento, sin necesidad de crear una función o método específico:

```html
<button (click)="isLoggedIn = true"> Log in</button>
```


<h3>Comunicación entre componentes</h3>
En Angular, la información no va solo de padres a hijos, como pasaría normalmente, sino que también puede ir a la inversa. Esto no facilita el poder pasar datos entre componentes:

*Teníamos la etiqueta `<app-games></app-games>` que aún no habíamos usado para más que cargar el contenido de ese componente dentro del componente `user`. Ahora vamos a probar a pasarle algún dato del componente padre `user` al componente hijo `games`*

```html
<app-games usename="{{ username }}"></app-games>
```

*Ahora debemos indicar cómo vamos a recoger ese valor, que en este caso será mediante un input*

```ts
export class GamesComponent {
  @Input() username = '';
  
  games = [
    {
      id: 1,
      name: 'Bloodborne'
    },
    {
      id: 2,
      name: 'God of War'
    },
    {
      id: 3,
      name: 'Outer Wilds'
    }
  ];
}
```

No nos valdrá solo con crear el atributo `username`, sino que le ponemos un wrapper. En este caso lo que pasa es que creamos un atributo vacío, y una vez lo apliquemos en el elemento padre, cogerá el valor del atributo `username` del componente `user`.

Ahora, para hacer la comunicación a la inversa, de hijo a padre, es un poco más complicado. Para ello necesitaremos usar un output:

*Comenzamos creando un listener en el template del componente `games`*

```html
<h3>Los juegos favoritos de {{ username }}</h3>
<ul>
    @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{game.name}}</li>
    }
</ul>
```

Aquí cada vez que hagamos click en uno de los elementos, llamaremos al método `fav()`, al que le pasaremos el parámetro o valor `game.name`.

*Ahora creamos el método `fav()` al que estábamos llamando y el wrapper con el output*

```ts
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  
  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
  }
```

Lo que pasa aquí es que creamos un wrapper con `@Output()`, con la propiedad `addFavoriteEvent`, y creamos un nuevo `EventEmitter` que llevará un parámetro de tipo `<string>`. En el método `fav()` haremos uso del `addFavoriteEvent`, (*que al ser una propiedad de la clase usará `this`, que se refiere a la instancia de la clase*) y emitiremos (`emit`) el evento que estamos creando pasando el valor del evento que deseemos, en este caso `gameName` (*que se refiere a `game.name`*). 

*Ahora nos pasamos al componente padre `user`*

```ts
export class UserComponent {
  username = 'Lucia';
  isLoggedIn = false;
  favGame = '';

  getFavorite(gameName: string){
    this.favGame = gameName;
  }
```

Por un lado creamos un atributo donde guardaremos el parámetro, y por otro lado hacemos un método que recogerá por parámetro el string con el valor deseado y lo guardará en el atributo que acabamos de crear.

*Por último aplicamos el evento que creamos antes con `EventEmitter` y se lo aplicamos a la etiqueta que muestra el contenido del componente `games` dentro del template de `user`*

```html
<app-games
        (addFavoriteEvent)="getFavorite($event)"
        username="{{ username }}"></app-games>

    @if (favGame !== '') {
        <p>Tu juego favorito es {{ favGame }}</p>
    }
```

En esta ocasión el único evento que nos dejará aplicarle a la etiqueta será `(addFavoriteEvent)`, que el propio programa detectará que está creada. Con `getFavorite` accederemos a la propiedad que hayamos pasado, que en este caso será el evento `(click)` y la información del evento `$event`, que llamaba al método `fav()` y que pasaba el parámetro `game.name`.
Esto nos evita el uso de callbacks.

<h2>Defer y Placeholder</h2>
Con `defer` lo que podemos hacer es cargar componentes después de que se haya cargado el contenido necesario de la página y la cpu esté libre de trabajo, esto nos ayuda a la optimización y rendimiento de la página:

```html
@defer () {
    <app-comments></app-comments>
}
```

A esto le podemos añadir un `placeholder`, que nos dejará preparado el hueco de aquello que el `defer` tenga que cargar:

```html
@defer () {
    <app-comments></app-comments>
}@placeholder {
    <p>Futuros comentarios</p>
}
```

Lo bueno de esto es que podemos tener un contenedor `vacío` que apenas consume recursos. Además podemos hacer lo siguiente para que el contenido del componente no llegue a cargarse hasta que ese elemento se vea en pantalla. Funcionaría cuando el componente aún no está y además tampoco se está cargando:

```html
@defer (on viewport) {
    <app-comments></app-comments>
}@placeholder {
    <p>Futuros comentarios</p>
}
```

*De esta manera la página solo cargará el contenedor vacío del placeholder hasta que el usuario se mueva por la página y llegue a la parte de la imagen, ahorrando recursos y tiempos de carga. 
Debemos tener en cuenta que esto funciona no solo con imágenes, sino que afecta a todo el javascript que afecte a ese componente.*

Además, podemos ayudar a la accesibilidad, preparando la página para casos en los que el ordenador / internet del usuario sean más lentos y tarden en cargar la página, dando una experiencia de usuario menos fluida. En estos casos podemos añadir otra directiva más llamada `loading`:

```html
@defer (on viewport) {
    <app-comments></app-comments>
}@placeholder {
    <p>Futuros comentarios</p>
}@loading {
    <p>Cargarndo comentarios...</p>
}
```

De esta manera el usuario puede visualizar algo mientras el componente se cargar, o por lo menos tiene una manera de saber que el componente se está cargando.

*Se puede forzar a que se muestre un tiempo mínimo, aunque las aplicaciones son muy situacionales*

```html
@loading (minimum 1s) {...}
```

