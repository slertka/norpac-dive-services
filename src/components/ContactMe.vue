<template>
    <form id="send-email" action="https://formsubmit.co/norpacdiveservices@gmail.com" method="POST">
        <div class="name">
            <input type="text" placeholder="First Name" name="first-name" class="w-full p-2 border rounded-lg" required/>
            <input type="text" placeholder="Last Name" name="last-name" class="w-full p-2 border rounded-lg" required/>
        </div>
        <div>
            <input class="full-width" type="text" name="phone" placeholder="(888) 333-1234" />
        </div>
        <div>
            <input class="full-width" type="email" name="email" placeholder="email@diveforme.com"/>
        </div>
        <div>
            <textarea type="text" placeholder="What's going on?" rows="4" required/>
        </div>
        <input type="hidden" name="_next" value="http://www.norpacdiveservices.com/about?success=true">
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-lg">Send Message</button>
    </form>
</template>

<style scoped>
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{
  font-family: "Lexend", Arial, Helvetica, sans-serif;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  font-family: "Lexend", Arial, Helvetica, sans-serif;
}

input:-moz-placeholder, textarea:-moz-placeholder {
  font-family: "Lexend", Arial, Helvetica, sans-serif;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  font-family: "Lexend", Arial, Helvetica, sans-serif;
}

input, textarea, button {
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
  font-size: 1.12rem;
  font-weight: 400;
  padding: 10px;
  width: 100%;
}

button {
  background-color: hsla(200, 100%, 37%, 0.2);
  color: #394CE2;
  font-weight: 600;
  font-size: 1.17rem;
}

button:hover {
  background-color: hsla(200, 100%, 37%, 0.2);
  color: #394CE2; 
  transition: 1s;
}

#send-email {
  display: flex;
  flex-direction: column;
}


.full-width, textarea, button, input {
  cursor: pointer;
}

@media (min-width: 1024px) {
  input, textarea, button {
    margin: 10px 10px 10px 0px;
    padding: 10px;
  }

  button {
    background-color: white;
    color: #394CE2;

  .name input {
    width: calc(50% - 5px);
  }

  .name input:last-of-type {
    margin-right: 0px;
  }
}
}
</style>