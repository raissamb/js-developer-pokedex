class PokemonDetails extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        // Card left construction
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        // Create the elements for card left
        const pokemonName = document.createElement("h2");
        pokemonName.textContent = (this.getAttribute("pokemonName"));

        const pokemonImage = document.createElement("img");
        pokemonImage.src = this.getAttribute("photo") || "/default-placeholder.png";
        pokemonImage.height = "100";
        pokemonImage.width = "120";
        pokemonImage.alt = "Image Pokemon";

        // Append the elements to card left
        cardLeft.appendChild(pokemonName);
        cardLeft.appendChild(pokemonImage);


        // Card right construction
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const pokemonInfoHeader = document.createElement("h2");
        pokemonInfoHeader.textContent = "Information";

        const pokemonHeight = document.createElement("p");
        pokemonHeight.textContent = "Height: " + (this.getAttribute("pokemonHeight"));

        const pokemonWeight = document.createElement("p");
        pokemonWeight.textContent = "Weight: " + (this.getAttribute("pokemonWeight"));

        const pokemonAbilities = document.createElement("p");
        pokemonAbilities.textContent = "Abilities: " + (this.getAttribute("pokemonAbilities"));

        // Append the elements to card right
        cardRight.appendChild(pokemonInfoHeader);
        cardRight.appendChild(pokemonHeight);
        cardRight.appendChild(pokemonWeight);
        cardRight.appendChild(pokemonAbilities);


        // Link cardLeft and cardRight to componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }


    styles() {
        const style = document.createElement("style");
        style.textContent = `
              .card {
                min-width: 170%;
                
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              }
              
              .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
              }
              
              .card__left > h2 {
                font-weight: 400;
              }
  
              .card__right > h2 {
                font-weight: 400;
              }
  
              .card__right > p {
                color:black;
              }
              
          `;

        return style;
    }
}

customElements.define("poke-detail-tag", PokemonDetails);