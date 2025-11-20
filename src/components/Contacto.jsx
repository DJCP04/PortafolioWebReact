export default function Contacto() {
  return (
    <section id="contacto">
      <h2>¿Hablamos de tu proyecto?</h2>
      <form className="contact-form">
        <div className="form-grid">
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="text" name="apellido" placeholder="Apellido" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="telefono" placeholder="Teléfono" />
          <textarea
            name="mensaje"
            placeholder="Cuéntame sobre tu proyecto..."
            required
          ></textarea>
          <button type="submit" onClick="{alert('Gracias por tu mensaje!!!')}">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </section>
  );
}
