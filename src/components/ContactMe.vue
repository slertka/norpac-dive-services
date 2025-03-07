<template>
    <form id="send-email" action="e2c6f9ebf264760208aa841764ce1d1d" method="POST">
        <div class="name">
            <input type="text" placeholder="First Name" name="first-name" class="w-full p-2 border rounded-lg" required/>
            <input type="text" placeholder="Last Name" name="last-name" class="w-full p-2 border rounded-lg" required/>
        </div>
        <div>
            <input class="full-width" type="text" name="phone" placeholder="Phone" />
        </div>
        <div>
            <input class="full-width" type="email" name="email" placeholder="Email"/>
        </div>
        <div>
            <textarea type="text" placeholder="Description" rows="4" required/>
        </div>
        <input type="hidden" name="_next" value="http://www.norpacdiveservices.com/about?success=true">
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-lg">Send Message</button>
    </form>
</template>

<style scoped>

@media (prefers-color-scheme: dark) {
  input, textarea, button {
    background: var(--color-background-soft);
    color: var(--vt-c-white-muted)
  }
}

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{
  font-family: "Lexend", Arial, Helvetica, sans-serif;
  color: var(--color-text);
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  font-family: "Lexend", Arial, Helvetica, sans-serif;
  color: var(--color-text);
}

input:-moz-placeholder, textarea:-moz-placeholder {
  font-family: "Lexend", Arial, Helvetica, sans-serif;
  color: var(--color-text);
}

input::-moz-placeholder, textarea::-moz-placeholder {
  font-family: "Lexend", Arial, Helvetica, sans-serif;
  color: var(--color-text);
}

input, textarea, button {
  border: 1.5px solid var(--color-text);
  border-radius: 10px;
  margin: 5px;
  font-size: 1.12rem;
  font-weight: 400;
  padding: 10px;
  width: 100%;
}

button {
  background-color: var(--color-button);
  color: var(--color-text);
  font-weight: 600;
  font-size: 1.17rem;
}

button:hover {
  background-color: var(--vt-c-orange-trans);
  color: var(--color-text); 
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

  .name input {
    width: calc(50% - 5px);
  }

  .name input:last-of-type {
    margin-right: 0px;
  }
}
</style>