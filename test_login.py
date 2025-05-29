from selenium import webdriver
from selenium.webdriver.common.by import By
import pytest
import time
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import logging

# Configuración del logger
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger()

@pytest.fixture
def driver():
    options = Options()
    options.add_argument('--headless')  # Modo headless, puedes comentar esta línea para ver el navegador
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()

def test_login_exitoso(driver):
    try:
        logger.info("Iniciando la prueba de login...")
        
        # Paso 1: Navegar al sitio de login
        driver.get("https://site.q10.com/login")
        logger.info("Página de login cargada correctamente.")

        # Esperar a que el campo de nombre de usuario esté presente
        username_field = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "NombreUsuario"))
        )
        logger.info("Campo de nombre de usuario encontrado. Ingresando datos...")
        username_field.send_keys("72847110")
        
        # Ingresar la contraseña
        password_field = driver.find_element(By.NAME, "Contrasena")
        logger.info("Campo de contraseña encontrado. Ingresando datos...")
        password_field.send_keys("@Tasayco_2004")
        
        # Hacer clic en el botón de login
        submit_button = driver.find_element(By.ID, "submit-btn")
        submit_button.click()
        logger.info("Formulario enviado. Esperando la carga del dashboard...")

        # Esperar a que cargue la página siguiente (puedes cambiar la condición según lo que necesites)
        # WebDriverWait(driver, 10).until(
        #     EC.presence_of_element_located((By.ID, "dashboard"))  # Asegúrate de usar un ID que sea relevante para tu página
        # )


        # Esperar a que cargue un elemento con clase "dashboard"
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "tarjeta-titulo"))
        )

        logger.info("Login exitoso! Página de dashboard cargada.")

        # Confirmación final
        logger.info("Prueba de login completada exitosamente.")
    
    except Exception as e:
        # Si algo falla, tomar captura de pantalla y loguear el error
        error_message = str(e)
        logger.error(f"Error durante la ejecución: {error_message}")
        driver.save_screenshot(f"error_login_{time.time()}.png")  # Usar timestamp para evitar sobreescribir capturas
        logger.error("Prueba fallida. Captura de pantalla guardada.")
        raise e