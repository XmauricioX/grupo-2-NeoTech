-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: neotech
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `pc` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `country` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `province` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `city` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (23,'ninguno','1111','Argentina','','',24,'2021-10-02 00:53:51','2021-10-02 00:53:51'),(24,'ninguno','1110','Argentina','','',24,'2021-10-02 00:54:23','2021-10-02 00:54:23'),(25,'ningunoo','1111','Argentina','','',24,'2021-10-02 00:54:38','2021-10-02 00:54:38'),(26,'casa 123','1234','Argentina','Córdoba','ALTA GRACIA',17,'2021-10-15 12:28:39','2021-10-25 14:34:25'),(27,'casa 123','1234','Argentina','Córdoba','ALTA GRACIA',17,'2021-10-15 12:28:58','2021-10-25 14:34:25'),(28,'casa 123','1234','Argentina','Córdoba','ALTA GRACIA',17,'2021-10-15 12:30:41','2021-10-25 14:34:25'),(29,'0','0','0','','',18,'2021-10-15 14:11:43','2021-10-15 20:34:32'),(30,'0','0','0','','',18,'2021-10-15 14:11:52','2021-10-15 20:34:32'),(31,'0','0','0','','',18,'2021-10-15 14:12:13','2021-10-15 20:34:32'),(32,'0','0','0','','',18,'2021-10-15 14:12:29','2021-10-15 20:34:32'),(33,'00000000000','000000000','0000000000000','','',25,'2021-10-15 20:35:17','2021-10-15 20:44:24'),(34,'','222222222222222222222222','Argentina','Buenos Aires','CUTRAL CO',29,'2021-11-08 15:42:27','2021-11-22 16:15:44'),(35,'calle 123','1234','Argentina','Tierra del Fuego, Antártida e Islas del ','RIO GRANDE',30,'2021-11-09 12:50:34','2021-11-09 12:50:34'),(36,'','','Argentina','Córdoba','ALDEA SANTA MARIA',38,'2021-11-16 13:18:38','2021-11-16 13:18:38'),(37,'calle falsa 123','1400','Argentina','Buenos Aires','9 DE JULIO',42,'2021-11-16 21:23:27','2021-11-16 21:24:33'),(38,'calle 123','','Argentina','Mendoza','8A. SECCION',44,'2021-11-17 11:51:56','2021-11-19 12:39:01');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (10,'HyperX'),(11,'LG'),(12,'Gigabyte'),(13,'Genius'),(14,'Reddragon'),(15,'Sony'),(16,'Nintendo'),(17,'Logitech'),(18,'Samsung');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `fkIdx_50` (`user_id`),
  CONSTRAINT `FK_48` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (15,'Teclados'),(16,'Mouse'),(17,'Gpus'),(18,'Motherboards'),(19,'Monitores'),(20,'Otros'),(21,'Audio'),(22,'Gaming'),(26,'Auriculares');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(40) NOT NULL,
  `description` text DEFAULT NULL,
  `color` varchar(30) NOT NULL,
  `images` varchar(100) DEFAULT 'default-image.png',
  `price` decimal(10,0) NOT NULL,
  `categoryId` int(11) unsigned NOT NULL,
  `brand_id` int(11) unsigned NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_100` (`brand_id`),
  KEY `fkIdx_90` (`categoryId`),
  CONSTRAINT `FK_88` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_98` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (20,'Monitor-25\"','El monitor es compatible con todos los sistemas operativos incluido Windows 10. Es importante tener en cuenta que el sistema operativo no esta relacionado al monitor, ya que el Windows es instalado en la CPU','Blanco','1633137305465_img_.png',100000,19,11,'2021-10-02 01:15:05','2021-11-16 21:30:01'),(21,'AU-MDRZ150','Auriculares sony con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos.','Negro','1633137380236_img_.png',8500,21,15,'2021-10-02 01:16:20','2021-11-03 21:13:37'),(23,'Pad','Pad comodo y sencillo con hermosas figuras gatunas','Blanco','1633137582631_img_.png',3000,20,12,'2021-10-02 01:19:42','2021-11-03 20:44:43'),(24,'AX370M-GAM','CPU Zócalo AMD AM4 para AMD Ryzen ™ serie 5000/4000 serie G / 3ra / 2da / 1ra generación AMD Ryzen ™ / 2da y 1ra generación AMD Ryzen ™ con gráficos Radeon ™ Vega / Athlon ™ con procesadores gráficos Radeon ™ Vega Procesadores','Naranja','1633137677778_img_.png',8750,18,12,'2021-10-02 01:21:17','2021-10-02 01:21:17'),(25,'TC-RGB-100','El teclado mecánico para gaming G413 ofrece rendimiento sin igual con tecnologías y funciones avanzadas. Con interruptores Romer-G™ Tactile, usados por los Profesionales de eSports en todo el mundo, el G413 Proporciona velocidad, respuesta y resistencia únicas en su género.','Multicolor','1633137787800_img_.png',7510,15,14,'2021-10-02 01:23:07','2021-10-02 01:23:07'),(26,'S.E.O HpX','HyperX sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductore','Multi RGb','1633137895865_img_.png',3500,16,17,'2021-10-02 01:24:42','2021-11-03 21:45:18'),(27,'Gpu-RX580','Adaptada a tus necesidades. Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB.Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.Por otro lado, tiene puerto USB y salida HDMI','Negro','1633138003438_img_.png',10000,17,15,'2021-10-02 01:26:43','2021-10-02 01:26:43'),(28,'AUR-520','Auriculares Reddragon con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos.','Negro','1633138683633_img_.png',7900,20,14,'2021-10-02 01:37:12','2021-11-03 20:47:17'),(29,'Monitor-30\"','El monitor es compatible con todos los sistemas operativos incluido Windows 10. Es importante tener en cuenta que el sistema operativo no esta relacionado al monitor, ya que el Windows es instalado en la CPU','Rojo y negro','1633138823172_img_.png',9500,19,11,'2021-10-02 01:40:23','2021-10-02 01:40:23'),(32,'Mother-LH27','un mother con muchos colores y entradas de usb','Violeta','1633826854683_img_.png',6820,18,17,'2021-10-10 00:47:34','2021-10-10 00:47:34'),(33,'Mon-Log20\"','El monitor es compatible con todos los sistemas operativos incluido Windows 10. Es importante tener en cuenta que el sistema operativo no esta relacionado al monitor, ya que el Windows es instalado en la CPU','Negro','1634906927235_img_.png',95,19,10,'2021-10-10 00:49:21','2021-11-03 20:45:07'),(34,'Au-LogRX','Auriculares Logitech con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos','Verde','1633827094900_img_.png',3200,21,12,'2021-10-10 00:51:34','2021-11-03 21:14:19'),(48,'Joystick PS4','Con tu Joystick PlayStation 4 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos','Rojo','1635973000919_img_.png',9899,22,15,'2021-11-03 20:53:35','2021-11-03 20:59:19'),(50,'Playstation 4','Con tu Joystick PlayStation 4 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos','Negro','1635973222156_img_.png',10500,22,15,'2021-11-03 21:00:22','2021-11-03 21:00:22'),(51,'Playstation 1','Con tu consola PlayStation Classic tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.','Gris','1635973275086_img_.png',5700,22,15,'2021-11-03 21:01:15','2021-11-03 21:01:15'),(52,'Ninte-Switch','Switch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología de elite en un aparato portátil con el que podrás jugar y disfrutar de diverso contenido online.','RGB','1635973513326_img_.png',11600,22,16,'2021-11-03 21:04:44','2021-11-15 14:43:12'),(53,'Nintendo 3DS','Nintendo 3DS se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología de elite en un aparato portátil con el que podrás jugar y disfrutar de diverso contenido online.','Negro','1635973762898_img_.png',7600,22,16,'2021-11-03 21:09:22','2021-11-03 21:09:22'),(54,'Nintendo Gamecube','Nintendo Gamecube se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología de elite en un aparato portátil con el que podrás jugar y disfrutar de diverso contenido online.','Violeta','1635973828980_img_.png',13500,22,16,'2021-11-03 21:10:29','2021-11-03 21:12:33'),(55,'Nintendo Wii','Nintendo WII se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología de elite en un aparato portátil con el que podrás jugar y disfrutar de diverso contenido online.','blanco','1635973884386_img_.png',25000,22,16,'2021-11-03 21:11:24','2021-11-03 21:11:24'),(56,'Au-LogRX','Auriculares Logitech con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos','Azul y Negro','1635974177000_img_.png',9600,21,17,'2021-11-03 21:16:17','2021-11-03 21:16:17'),(57,'Micrófono ZW-850','El Micrófono condensador QuadCast de HyperX ZW-850 es unos de los mejores micrófonos gamer en el área y perfectamente compatible con PC, Mac y PS4. Tiene una calidad inmensa tanto de especificaciones como de construcción.','Gris','1635974464480_img_.png',27500,21,10,'2021-11-03 21:21:04','2021-11-03 21:21:04'),(58,'AU-Beats 220','Auriculares Reddragon con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos','Rojo','1635974585248_img_.png',13050,21,14,'2021-11-03 21:23:05','2021-11-03 21:23:05'),(59,'Monitor HyperX24\"','El monitor es compatible con todos los sistemas operativos incluido Windows 10. Es importante tener en cuenta que el sistema operativo no esta relacionado al monitor, ya que el Windows es instalado en la CPU','RGB','1635974841760_img_.png',15070,19,10,'2021-11-03 21:27:21','2021-11-03 21:28:12'),(60,'Tec-540rx','El teclado mecánico para gaming Tec-540rx ofrece rendimiento sin igual con tecnologías y funciones avanzadas. Con interruptores Romer-G™ Tactile, usados por los Profesionales de eSports en todo el mundo, el G413 Proporciona velocidad, respuesta y resistencia únicas en su género.','RGB','1635975223914_img_.png',13200,15,14,'2021-11-03 21:33:13','2021-11-15 14:42:54'),(61,'Teclado Genius DG-850','El teclado mecánico para gaming DG-850 ofrece rendimiento sin igual con tecnologías y funciones avanzadas. Con interruptores Romer-G™ Tactile, usados por los Profesionales de eSports en todo el mundo, el G413 Proporciona velocidad, respuesta y resistencia únicas en su género.','RGB','1635975390930_img_.png',10500,15,13,'2021-11-03 21:36:30','2021-11-03 21:36:30'),(62,'Teclado DZ-150','El teclado mecánico para gaming DZ-150 ofrece rendimiento sin igual con tecnologías y funciones avanzadas. Con interruptores Romer-G™ Tactile, usados por los Profesionales de eSports en todo el mundo, el G413 Proporciona velocidad, respuesta y resistencia únicas en su género.','Negro','1635975620866_img_.png',45000,15,17,'2021-11-03 21:40:20','2021-11-03 21:40:20'),(63,'Mouse RGB-Cougar','MOUSE INALÁMBRICO G305 K/DA LIGHTSPEED PARA JUEGOS Logitech G305 K/DA LIGHTSPEED Ratón inalámbrico para Gaming • Juega a tope: el ratón para gaming G305 K/DA está diseñado con el arte oficial del universo alternativo de League of Legends K/DA para una experiencia de juego completa y envolvente. • La marca de accesorios inalámbricos para gaming más vendida del mundo - Basado en datos de ventas agregados independientes (febr. 2019 - febr. 2020) de teclados, ratones y auriculares para PC gaming inalámbricos en unidades en: US, CA, CN, JP, KR, TW, TH, IN, DE, FR, RU, UK, SE, TR.','Verde','1635975825434_img_.png',9800,16,12,'2021-11-03 21:43:45','2021-11-03 21:43:45'),(64,'Mouse RedGXT','MOUSE INALÁMBRICO RedGXT /DA LIGHTSPEED PARA JUEGOS Logitech G305 K/DA LIGHTSPEED Ratón inalámbrico para Gaming • Juega a tope: el ratón para gaming G305 K/DA está diseñado con el arte oficial del universo alternativo de League of Legends K/DA para una experiencia de juego completa y envolvente. • La marca de accesorios inalámbricos para gaming más vendida del mundo - Basado en datos de ventas agregados independientes (febr. 2019 - febr. 2020) de teclados, ratones y auriculares para PC gaming inalámbricos en unidades en: US, CA, CN, JP, KR, TW, TH, IN, DE, FR, RU, UK, SE, TR.','RGB','1635975984878_img_.png',8000,16,10,'2021-11-03 21:46:24','2021-11-03 21:46:24'),(65,'Auriculares','Auriculares Reddragon con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos','Negro','1636766572010_img_.png',2000,21,14,'2021-11-09 12:29:46','2021-11-13 01:22:52');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_products`
--

DROP TABLE IF EXISTS `purchase_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `purchase_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_products_FK` (`purchase_id`),
  CONSTRAINT `purchase_products_FK` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_products`
--

LOCK TABLES `purchase_products` WRITE;
/*!40000 ALTER TABLE `purchase_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases`
--

LOCK TABLES `purchases` WRITE;
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `image` varchar(100) DEFAULT 'default.png',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `user_rol` int(1) NOT NULL DEFAULT 0,
  `phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (17,'admin','admin','admin@admin.com','$2a$10$8L0HiA.TFCBznAWA73w02.53QDG/g/Qu93M.rmVSKEfMb246X8Tfa','default.png','2021-10-02 00:43:15','2021-11-16 21:30:45',1,'123456789'),(18,'francodel4to','Fernandez','francofernandez@gmail.com','$2a$10$7rA0x6konIL/Lg4EDdkRr.WU3utg0irv/mgJfktm0J.H0uJqnpbG6','default.png','2021-10-02 00:44:47','2021-11-16 21:30:48',1,'0'),(19,'Ariel','Handrade','arielhandrade@gmail.com','$2a$10$N9bBdYmgkvCP7s6cvznvXuiGRTXxbtzven/Qg7y4MBp3NoNmQjnPC','default.png','2021-10-02 00:46:15','2021-11-20 15:13:30',0,''),(20,'Mauricio','Maneyro','mauriciomaneyro@gmail.com','$2a$10$0cf2t03g.K9.Wh/gEV21f.aV6zO7Vt.8x03fhkRLabBFjODG5gXL6','default.png','2021-10-02 00:47:24','2021-10-02 00:47:24',0,''),(21,'Jonathan','Cespedes','jonathancespedes@gmail.com','$2a$10$zbijMrJT44PsRMfS6ReKm.wIFdZhD13oMe1Awl4UqgbmxZQFc2MES','default.png','2021-10-02 00:48:03','2021-10-02 00:48:03',0,''),(22,'Matias','Lopez','matiaslopez@gmail.com','$2a$10$7Xahul276OOUZCIWOslsfOUZY.U9A.uMk1/uA7okFevN4eLi6LT5C','default.png','2021-10-02 00:49:56','2021-10-02 00:49:56',0,''),(29,'Franco','Fernandez','superadmin@gmail.com','$2a$10$QlfV1gU9BdEZTF6uJPXwAu7.Hz8p7IY.BplZrdAZtw3Ao28tOXPU6','1637597744553_img_.jpg','2021-11-03 20:40:55','2021-11-22 16:15:44',1,''),(34,'Franco','Fernandez','in@gmail.com','$2a$10$L8rNjh3zWeJAGiKfKkhFfODv78xwefb2FbHdvkq3.8koX9iC64XgC','default.png','2021-11-15 22:50:52','2021-11-15 22:50:52',0,''),(38,'aime','pelosso','aime@gmail.com','$2a$10$5GmKbo.lUSi07gtRdrb5PuFRmjVhjaNYXD1EuOfPzsP.k.a3VKBU6','1637068718170_img_.gif','2021-11-16 13:17:52','2021-11-16 13:18:38',0,''),(43,'Ailu','Sicardi','ailu@gmail.com','$2a$10$4zZRnH4dU..aV6iE8UNa5ePIl/rvwV71lPmD5Dr7YPYe2.lYTrGUu','default.png','2021-11-17 11:48:06','2021-11-17 11:48:06',0,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'neotech'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-22 13:32:47
