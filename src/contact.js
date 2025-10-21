export default function Contact(){

    const section = document.createElement("section");
    section.setAttribute('id', 'contact')
    section.classList.add('contact-section')

    section.innerHTML = `
        
      <h2>Contact</h2>

      <div class="group">
        <div class="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat fugit maiores atque architecto saepe tenetur quasi reiciendis illum sint doloremque alias inventore, asperiores maxime pariatur totam hic assumenda repudiandae, iusto quisquam nisi! Eaque doloremque perspiciatis minus voluptate dicta. A ratione autem dolor iure libero numquam voluptatem nobis laborum et corporis.
        </div>

        <form>
          <label for="name">Name</label>
          <input type="text" id="name">

          <label for="email">Email</label>
          <input type="email" id="email">

          <label for="message">Message</label>
          <textarea id="message" cols="30" rows="10"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    
    `

    return section
}