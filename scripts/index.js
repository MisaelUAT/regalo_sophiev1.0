var struct_modal1 = document.getElementById("modal-sect-1");
var button_close1 = document.getElementById("btn_close1");
var button_open1 = document.getElementById("btn_open1");
var image_event_cat = document.getElementById("image-cat");
var message_image_cat = document.getElementById("container-message");
var image_event_valentia = document.getElementById("imagen-valentia");
var message_image_valentia = document.getElementById("modal-valentia");
var image_event_inteligencia = document.getElementById("imagen-inteligencia");
var message_image_inteligencia = document.getElementById("modal-inteligencia");
var image_event_artista = document.getElementById("imagen-artista");
var message_image_artista = document.getElementById("modal-artista");
var image_event_random = document.getElementById("imagen-random");
var message_image_random = document.getElementById("modal-random");
var image_event_belleza = document.getElementById("imagen-belleza");
var message_image_belleza= document.getElementById("modal-belleza");




button_open1.onclick = () => {
  struct_modal1.classList.remove("hidden");
};

button_close1.onclick = () => {
  struct_modal1.classList.add("hidden");
};

image_event_cat.onclick = () => {
  image_event_cat.classList.add("hidden");
  message_image_cat.classList.remove("hidden");
};

message_image_cat.onclick = () => {
  message_image_cat.classList.add("hidden");
  image_event_cat.classList.remove("hidden");
};

image_event_valentia.onclick = () =>{
  image_event_valentia.classList.add("hidden");
  message_image_valentia.classList.remove("hidden");
}

message_image_valentia.onclick = () => {
  message_image_valentia.classList.add("hidden");
  image_event_valentia.classList.remove("hidden");
};

image_event_inteligencia.onclick = () =>{
  image_event_inteligencia.classList.add("hidden");
  message_image_inteligencia.classList.remove("hidden");
}

message_image_inteligencia.onclick = () => {
  message_image_inteligencia.classList.add("hidden");
  image_event_inteligencia.classList.remove("hidden");
};

image_event_random.onclick = () =>{
  image_event_random.classList.add("hidden");
  message_image_random.classList.remove("hidden");
}

message_image_random.onclick = () => {
  message_image_random.classList.add("hidden");
  image_event_random.classList.remove("hidden");
};

image_event_belleza.onclick = () =>{
  image_event_belleza.classList.add("hidden");
  message_image_belleza.classList.remove("hidden");
}

message_image_belleza.onclick = () => {
  message_image_belleza.classList.add("hidden");
  image_event_belleza.classList.remove("hidden");
};

image_event_artista.onclick = () =>{
  image_event_artista.classList.add("hidden");
  message_image_artista.classList.remove("hidden");
}

message_image_artista.onclick = () => {
  message_image_artista.classList.add("hidden");
  image_event_artista.classList.remove("hidden");
};