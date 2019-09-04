// Função para o click do botão
function handleButton() {
  function setBack() {
    footerButton.setAttribute('style', 'width: 100%;  margin-top: 15px; font-size: 12px; padding: 10px; color: #fff; background: #000; border: 1px solid #000; cursor: pointer; text-transform: uppercase; font-weight: bold; transition: all 1s linear; opacity: 1;');
  }
  footerButton.setAttribute('style', 'width: 100%;  margin-top: 15px; font-size: 12px; padding: 10px; color: #fff; background: #000; border: 1px solid #000; cursor: pointer; text-transform: uppercase; font-weight: bold; transition: all 1s linear; opacity: 0.5;');
  setTimeout(setBack, 1500);
}

// Captura os dados do produto

const productImageUrl = document.querySelector("meta[property='og:image']").getAttribute("content");
const productTitleText = document.querySelector("meta[property='og:title']").getAttribute("content");
const productPriceText = parseFloat(document.querySelector("meta[property='product:price:amount']").getAttribute("content"));
const productOriginalPrice = document.querySelector("strong[class='skuBestPrice']").textContent;

// Cria o container
const newFooter = document.createElement("div");
newFooter.setAttribute('id', "new-footer");
newFooter.setAttribute('style', "background: #fff; width: 100%; height: 250px; border-top: 1px solid #555; position: fixed; bottom: 0px;  z-index: 7; margin: 0px; display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 0px; ");

// Cria o botão de fechar
const closeButtonContainer = document.createElement("div");
closeButtonContainer.setAttribute('style', "position: absolute; right: 0; top: 0; display: flex; justify-content: center; align-items: center; width: 25px; height: 25px; background: #555; ");
closeButtonContainer.setAttribute('onclick', 'document.getElementById("new-footer").parentNode.removeChild(document.getElementById("new-footer"))');

const closeButton = document.createElement("span");
closeButton.setAttribute('style', "color: #fff;  font-size: 20px; font-weight: bolder");
closeButton.appendChild(document.createTextNode("X"));
closeButtonContainer.appendChild(closeButton);

// Cria o container para a imagem
const imageDiv = document.createElement("div");
imageDiv.setAttribute('style', "margin: 10px; max-height: 230px; overflow: hidden;");

const productImage = document.createElement("img");
productImage.setAttribute('style', 'width: auto; height: 230px; ');
productImage.setAttribute('src', productImageUrl);

// Cria o container para título, preço e botão comprar
const dataContainer = document.createElement("div");
dataContainer.setAttribute('style', "margin: 10px; max-height: 230px; ");

// Cria os elementos de título, preço e botão comprar
const productTitleContainer = document.createElement("div");
productTitleContainer.setAttribute('class', "product__name");
productTitleContainer.setAttribute('style', "padding-bottom: 10px;");

const productTitle = document.createElement("p");
productTitle.setAttribute('class', "productName");
productTitle.appendChild(document.createTextNode(productTitleText));
productTitleContainer.appendChild(productTitle);

const productPrice = document.createElement("strong");
productPrice.appendChild(document.createTextNode(productPriceText.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })));
productPrice.setAttribute('style', "padding-bottom: 10px; display: block;");

const productPriceOff = document.createElement("strong");
productPriceOff.appendChild(document.createTextNode((productPriceText * 0.9).toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })));
productPriceOff.setAttribute('style', "padding: 10px 0px; ");

const discountText = document.createElement('span');
discountText.setAttribute('style', "font-size: 12px; font-weight: 400; line-height: 14px; margin-left: 10px;");
discountText.appendChild(document.createTextNode("preço com 10% de desconto"));

// Cria o botão de Adicionar ao Carrinho

const footerButton = document.createElement("button");
footerButton.setAttribute('style', 'width: 100%; margin-top: 15px; font-size: 12px; padding: 10px; color: #fff; background: #000; border: 1px solid #000; cursor: pointer; text-transform: uppercase; font-weight: bold; transition: all 1s linear; opacity: 1;');
footerButton.setAttribute('onclick', 'handleButton()');
footerButton.appendChild(document.createTextNode("Adicionar à sacola"));

// Insere os itens no container

dataContainer.appendChild(productTitleContainer);
dataContainer.appendChild(productPrice);
dataContainer.appendChild(productPriceOff);
dataContainer.appendChild(discountText);
dataContainer.appendChild(footerButton);

imageDiv.appendChild(productImage);

newFooter.appendChild(closeButtonContainer);
newFooter.appendChild(imageDiv);
newFooter.appendChild(dataContainer);

// Insere o container no código
document.body.appendChild(newFooter);

