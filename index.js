//array of images
let images = [
  "./images/tech_camera.jpg",
  "./images/phone_buildings.jpg",
  "./images/tech_tablet.jpg",
  "./images/tech_typewriter.jpg",
  "./images/tech_sound.jpg",
  "./images/tech_drone.jpg",
  "./images/tech_tableturner.jpg",
  "./images/tech_phone.jpg"
];

//image in document 
let container = document.querySelector(".container");
let body = document.body;
for(let image in images){
  let imgContainer = document.createElement("div");
  imgContainer.id = "imgContainer";

  let img = document.createElement("img");
  img.className = "img";

  //source of image 
  img.src = images[image];

  //name of image
  let imageName = document.createElement("p");
  imageName.className = "imageName";
  imageName.textContent = images[image].split("./images/").join("");

  //button to remove an image from gallary
  let removeBtn = document.createElement("button");
  removeBtn.className = "removeBtn";
  removeBtn.textContent = "Delete image!";

  //button to edit an image from gallary
  let editNameBtn = document.createElement("button");
  editNameBtn.className = "editNameBtn";
  editNameBtn.textContent = "Edit name";


  let nameInput = document.createElement("input");
  nameInput.className = "nameInput";
  nameInput.type = "text";
  nameInput.value = imageName.textContent;
  nameInput.style.display = "none";

  let saveNameBtn = document.createElement("button");
  saveNameBtn.className = "saveNameBtn";
  saveNameBtn.textContent = "Save";
  saveNameBtn.style.display = "none";

  //render elements in document
  imgContainer.appendChild(img);
  imgContainer.appendChild(imageName);
  imgContainer.appendChild(editNameBtn);
  imgContainer.appendChild(nameInput)
  imgContainer.appendChild(saveNameBtn)
  saveNameBtn.style.display = "none";
  imgContainer.appendChild(removeBtn);
  container.appendChild(imgContainer);
  removeBtn.addEventListener("click",()=>{
    imgContainer.style.display = "none";
  });
  
  editNameBtn.addEventListener("click", () => {
    editNameBtn.style.display = "none";
    imageName.style.display = "none";
    nameInput.style.display = "block";
    saveNameBtn.style.display = "inline";
  });

  saveNameBtn.addEventListener("click", () => {
    let newName = nameInput.value;
    imageName.textContent = newName;
    editNameBtn.style.display = "inline";
    imageName.style.display = "block";
    nameInput.style.display = "none";
    saveNameBtn.style.display = "none";
  });
}


//load image from pc

document.getElementById('imageInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
    const imageContainer = document.createElement("div");
    imageContainer .className = "imageContainer ";
    const newImage = document.createElement('img');
    newImage.src = e.target.result;
    // newImage.alt = 'Selected Image';
    newImage.className = 'selectedImage';

    //button to delete image from gallary
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteImg";
    deleteBtn.textContent = "Delete image!";
    
    //button to edit image
    const editNameBtn = document.createElement("button");
    editNameBtn.className = "editNameBtn";
    editNameBtn.textContent = "Edit name";

    const nameInput = document.createElement("input");
    nameInput.className = "nameInput";
    nameInput.type = "text";
    nameInput.style.display = "none";

    const saveNameBtn = document.createElement("button");
    saveNameBtn.className = "saveNameBtn";
    saveNameBtn.textContent = "Save";
    saveNameBtn.style.display = "none";

    let imageName = document.createElement("p");
    imageName.className = "imageName";
    imageName.textContent = file.name.split('.')[0]; // Displaying the name without extension;
    imageContainer.appendChild(newImage);
    imageContainer.appendChild(imageName)
    imageContainer.appendChild(editNameBtn);
    imageContainer.appendChild(nameInput);
    imageContainer.appendChild(saveNameBtn);
    imageContainer.appendChild(deleteBtn)
    container.appendChild(imageContainer )
      deleteBtn.addEventListener("click",()=>{
        imageContainer.style.display = "none";
      });

    editNameBtn.addEventListener("click", () => {
      editNameBtn.style.display = "none";
      imageName.style.display = "none";
      nameInput.style.display = "block";
      saveNameBtn.style.display = "inline";
      });
        
    saveNameBtn.addEventListener("click", () => {
      let newName = nameInput.value;
      imageName.textContent = newName;
      editNameBtn.style.display = "inline";
      imageName.style.display = "block";
      nameInput.style.display = "none";
      saveNameBtn.style.display = "none";
      });
    };
    reader.readAsDataURL(file);
  }
});

// modal to confirm if you want to delete all image or not
let deleteImages= document.getElementById("deleteImages");
let modal = document.getElementById("confirmationModal");
deleteImages.addEventListener("click",(ele)=>{
  modal.style.display = "block";
  let confirmBtn = document.getElementById("confirm");
  confirmBtn.addEventListener("click",()=>{
    container.style.display = "none";
    modal.style.display = "none";
  })
  let cancelBtn = document.getElementById("cancel");
  cancelBtn.addEventListener("click",()=>{
    modal.style.display = "none";
  })
})


// slider 
function showModalSlider(imageSrc) {
  let modalSliderContainer = document.getElementById("modalSliderContainer");
  let modalImg = document.getElementById("modalImg");
  modalImg.src = imageSrc;
  modalSliderContainer.style.display = "flex";
}

// Close modal slider using button
let closeModalSlider = document.getElementById("closeModalSlider");
closeModalSlider.addEventListener("click", () => {
  document.getElementById("modalSliderContainer").style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.getElementById("modalSliderContainer").style.display = "none";
  }
});

let nextModalImg = document.getElementById("nextModalImg");
let previousModalImg = document.getElementById("previousModalImg");


// Attach event listeners to images to show the modal slider on click
let galleryImages = document.querySelectorAll(".img, .selectedImage");
galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    showModalSlider(image.src);
    currentIndex = index;
  });
});



// nextModalImg.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % galleryImages.length;
//   const nextImageSrc = galleryImages[currentIndex].src;
//   showModalSlider(nextImageSrc);
// });

// previousModalImg.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
//   const previousImageSrc = galleryImages[currentIndex].src;
//   showModalSlider(previousImageSrc);
// });