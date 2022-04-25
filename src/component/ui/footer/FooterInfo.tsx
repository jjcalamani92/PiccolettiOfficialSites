export const FooterInfo = () => {
  return (
    <div className="box">
        <h3>Nuevas noticias</h3>
        <p>Suscribete para estar actualizado</p>
        <form action="">
          <input
            type="email"
            name=""
            className="email"
            placeholder="ingresa tu email"
          />
          <input type="submit" value="suscribirse" className="btn" />
        </form>
      </div>
  )
}
