from selenium import webdriver
from selenium.webdriver.common.by import By
import pytest
import time
from selenium.webdriver.chrome.options import Options

@pytest.fixture
def driver():
    options = Options()
    options.add_argument('--headless') 
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')

    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()

def test_login_exitoso(driver):
    try:
        driver.get("https://site.q10.com/login")
        driver.find_element(By.NAME, "NombreUsuario").send_keys("72847110")
        driver.find_element(By.NAME, "Contrasena").send_keys("@Tasayco_2004")
        driver.find_element(By.ID, "submit-btn").click()
        time.sleep(10)
    except Exception as e:
        driver.save_screenshot("error_login.png")
        raise e
