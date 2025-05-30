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
        
        driver.get("http://localhost:4200/")
        logger.info("Página de login cargada correctamente.")

        username_field = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "email"))
        )
        logger.info("Campo de nombre de usuario encontrado. Ingresando datos...")
        username_field.send_keys("angel.castilla@vallegrande.edu.pe")
        
        password_field = driver.find_element(By.ID, "password")
        logger.info("Campo de contraseña encontrado. Ingresando datos...")
        password_field.send_keys("936609401")
        
        WebDriverWait(driver, 10).until(
            EC.invisibility_of_element_located((By.CLASS_NAME, "overlay-class"))
        )

        submit_button = driver.find_element(By.ID, 'button_iniciar')
        driver.execute_script("arguments[0].scrollIntoView(true);", submit_button)
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable(submit_button)
        )

        time.sleep(4) 
        submit_button.click()




        beneficiarios_link = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//a[h3[contains(text(),'Beneficiarios')]]"))
        )
        
     
        logger.info("Clic en el enlace de Beneficiarios.")
        beneficiarios_link.click()

        time.sleep(10) 

        verDetalle = driver.find_element(By.ID, 'verDetalle')
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable(verDetalle)
        )

        time.sleep(4) 
        verDetalle.click()

        time.sleep(19) 


        abriDatosPersonales = driver.find_element(By.ID, 'abriDatosPersonales')
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable(abriDatosPersonales
            )
        )

        time.sleep(2) 
        abriDatosPersonales.click()

        time.sleep(9) 



        nombre = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "nombre"))
        )
        nombre.send_keys("angel g")


        apellidos = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "apellidos"))
        )
        apellidos.send_keys("castilla")

        numeroDocumento = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "numeroDocumento"))
        )
        numeroDocumento.send_keys("74787878")

      
        time.sleep(5) 

        Guarda_datos = driver.find_element(By.ID, 'Guarda_datos')
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable(Guarda_datos)
        )

        time.sleep(4) 
        Guarda_datos.click()

    
    except Exception as e:
        error_message = str(e)
        logger.error(f"Error durante la ejecución: {error_message}")
        driver.save_screenshot(f"error_login_{time.time()}.png") 
        logger.error("Prueba fallida. Captura de pantalla guardada.")
        raise e