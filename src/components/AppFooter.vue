<template>
  <footer class="app-footer">
    <div class="footer-content">
      <!-- Informações de Contato -->
      <div class="footer-section">
        <h4>Contato</h4>
        <p>📧 contato@techevent.com</p>
        <p>📞 (11) 9999-9999</p>
        <p>📍 São Paulo, SP</p>
      </div>

      <!-- Redes Sociais -->
      <div class="footer-section">
        <h4>Redes Sociais</h4>
        <div class="social-links">
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Facebook</a>
        </div>
      </div>

      <!-- Direitos Autorais -->
      <div class="footer-section">
        <h4>Direitos</h4>
        <p class="copyright">
          © 2025 Tech Event. Todos os direitos reservados.
        </p>
        <p class="exclusive-rights">
          Esta página é de direito exclusivo da Tech Event. 
          Proibida a reprodução sem autorização.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  padding: 2rem 1rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
}

.footer-section h4 {
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-section p {
  margin-bottom: 0.5rem;
  line-height: 1.5;
  color: #ecf0f1;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-link {
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.3rem 0;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #3498db;
}

.copyright {
  font-weight: 600;
  color: #3498db !important;
}

.exclusive-rights {
  font-size: 0.8rem;
  color: #bdc3c7 !important;
  font-style: italic;
  margin-top: 0.5rem;
}

/* Responsivo */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-section {
    text-align: center;
  }
}
</style>