CREATE DATABASE  IF NOT EXISTS `neotech` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `neotech`;
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (23,'ninguno','1111','Argentina','','',24,'2021-10-02 00:53:51','2021-10-02 00:53:51'),(24,'ninguno','1110','Argentina','','',24,'2021-10-02 00:54:23','2021-10-02 00:54:23'),(25,'ningunoo','1111','Argentina','','',24,'2021-10-02 00:54:38','2021-10-02 00:54:38'),(26,'casa 123','1234','Argentina','Córdoba','ALTA GRACIA',17,'2021-10-15 12:28:39','2021-10-25 14:34:25'),(27,'casa 123','1234','Argentina','Córdoba','ALTA GRACIA',17,'2021-10-15 12:28:58','2021-10-25 14:34:25'),(28,'casa 123','1234','Argentina','Córdoba','ALTA GRACIA',17,'2021-10-15 12:30:41','2021-10-25 14:34:25'),(29,'0','0','0','','',18,'2021-10-15 14:11:43','2021-10-15 20:34:32'),(30,'0','0','0','','',18,'2021-10-15 14:11:52','2021-10-15 20:34:32'),(31,'0','0','0','','',18,'2021-10-15 14:12:13','2021-10-15 20:34:32'),(32,'0','0','0','','',18,'2021-10-15 14:12:29','2021-10-15 20:34:32'),(33,'00000000000','000000000','0000000000000','','',25,'2021-10-15 20:35:17','2021-10-15 20:44:24');
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (8,'Samsung'),(10,'HyperX'),(11,'LG'),(12,'Gigabyte'),(13,'Genius'),(14,'Reddragon'),(15,'Sony'),(16,'Nintendo'),(17,'Logitech');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_50` (`user_id`),
  CONSTRAINT `FK_48` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_products`
--

DROP TABLE IF EXISTS `cart_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_item_price` decimal(10,0) NOT NULL,
  `order_item_quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_products`
--

LOCK TABLES `cart_products` WRITE;
/*!40000 ALTER TABLE `cart_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_products` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (13,'Audio'),(14,'Gaming'),(15,'Teclados'),(16,'Mouse'),(17,'Gpus'),(18,'Motherboards'),(19,'Monitores'),(20,'Otros');
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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (18,'Mouse-RGB','Mouse Gaming Pulsefire Surge RGB HX-MC002B   Características: Los anillos de luz brindan efectos dinámicos RGB 360°. Sensor Pixart 3389 con DPI nativos de hasta 16.000. Interruptores Omron diseñados para 50 millones de clics. Fácil personalización con el software HyperX NGenuity. Memoria interna para almacenar personalizaciones. Skates de tamaño extra grande que ayuda a mantener un movimiento suave.','rojo y negro','1634862586107_img_.png',7000,16,12,'2021-10-02 01:11:02','2021-10-22 00:29:46'),(19,'Nin-Switch','Switch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología de elite en un aparato portátil con el que podrás jugar y disfrutar de diverso contenido online','Azul rojo y negro','1633137176559_img_.png',9000,14,16,'2021-10-02 01:12:56','2021-10-02 01:12:56'),(20,'Monitor-24\"','El monitor es compatible con todos los sistemas operativos incluido Windows 10. Es importante tener en cuenta que el sistema operativo no esta relacionado al monitor, ya que el Windows es instalado en la CPU','Blanco','1633137305465_img_.png',10000,19,11,'2021-10-02 01:15:05','2021-10-02 01:15:05'),(21,'AU-MDRZ150','Auriculares sony con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos.','Negro','1633137380236_img_.png',8500,13,15,'2021-10-02 01:16:20','2021-10-02 01:16:20'),(22,'Playstation 4','Adaptada a tus necesidades. Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB.Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás','Negro','1633137454161_img_.png',7000,14,15,'2021-10-02 01:17:34','2021-10-02 01:17:34'),(23,'Pad','Pad comodo y sencillo con hermosas figuras gatunas','Blanco','1633137582631_img_.png',3000,20,8,'2021-10-02 01:19:42','2021-10-02 01:19:42'),(24,'AX370M-GAM','CPU Zócalo AMD AM4 para AMD Ryzen ™ serie 5000/4000 serie G / 3ra / 2da / 1ra generación AMD Ryzen ™ / 2da y 1ra generación AMD Ryzen ™ con gráficos Radeon ™ Vega / Athlon ™ con procesadores gráficos Radeon ™ Vega Procesadores','Naranja','1633137677778_img_.png',8750,18,12,'2021-10-02 01:21:17','2021-10-02 01:21:17'),(25,'TC-RGB-100','El teclado mecánico para gaming G413 ofrece rendimiento sin igual con tecnologías y funciones avanzadas. Con interruptores Romer-G™ Tactile, usados por los Profesionales de eSports en todo el mundo, el G413 Proporciona velocidad, respuesta y resistencia únicas en su género.','Multicolor','1633137787800_img_.png',7510,15,14,'2021-10-02 01:23:07','2021-10-02 01:23:07'),(26,'S.E.O HpX','HyperX sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductore','Multi RGb','1633137895865_img_.png',3500,16,14,'2021-10-02 01:24:42','2021-10-02 01:24:55'),(27,'Gpu-RX580','Adaptada a tus necesidades. Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB.Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.Por otro lado, tiene puerto USB y salida HDMI','Negro','1633138003438_img_.png',10000,17,15,'2021-10-02 01:26:43','2021-10-02 01:26:43'),(28,'AUR-520','Auriculares Reddragon con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos.','Negro','1633138683633_img_.png',7900,13,14,'2021-10-02 01:37:12','2021-10-02 01:38:03'),(29,'Monitor-30\"','El monitor es compatible con todos los sistemas operativos incluido Windows 10. Es importante tener en cuenta que el sistema operativo no esta relacionado al monitor, ya que el Windows es instalado en la CPU','Rojo y negro','1633138823172_img_.png',9500,19,11,'2021-10-02 01:40:23','2021-10-02 01:40:23'),(30,'Playstation 1','Con tu consola PlayStation Classic tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos','Gris','1633138895477_img_.png',2000,14,12,'2021-10-02 01:41:35','2021-10-02 01:41:35'),(31,'Joy-PS4','Con tu Joystick PlayStation 4 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos','Negro','1633142080488_img_.png',9500,14,15,'2021-10-02 02:34:40','2021-10-02 02:34:40'),(32,'Mother-LH27','un mother con muchos colores y entradas de usb','Violeta','1633826854683_img_.png',6820,18,17,'2021-10-10 00:47:34','2021-10-10 00:47:34'),(33,'Mon-Log20\"','El monitor es compatible con todos los sistemas operativos incluido Windows 10. Es importante tener en cuenta que el sistema operativo no esta relacionado al monitor, ya que el Windows es instalado en la CPU','Negro','1634906927235_img_.png',95,19,8,'2021-10-10 00:49:21','2021-10-22 12:49:17'),(34,'Au-LogRX','Auriculares Logitech con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos','Verde','1633827094900_img_.png',3200,13,12,'2021-10-10 00:51:34','2021-10-22 12:33:03');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (17,'admin','admin','admin@admin.com','$2a$10$8L0HiA.TFCBznAWA73w02.53QDG/g/Qu93M.rmVSKEfMb246X8Tfa','default.png','2021-10-02 00:43:15','2021-10-25 14:34:25',1,'123456789'),(18,'francodel4to','Fernandez','francofernandez@gmail.com','$2a$10$7rA0x6konIL/Lg4EDdkRr.WU3utg0irv/mgJfktm0J.H0uJqnpbG6','default.png','2021-10-02 00:44:47','2021-10-15 20:34:32',0,'0'),(19,'Ariel','Handrade','arielhandrade@gmail.com','$2a$10$N9bBdYmgkvCP7s6cvznvXuiGRTXxbtzven/Qg7y4MBp3NoNmQjnPC','default.png','2021-10-02 00:46:15','2021-10-02 00:46:15',0,''),(20,'Mauricio','Maneyro','mauriciomaneyro@gmail.com','$2a$10$0cf2t03g.K9.Wh/gEV21f.aV6zO7Vt.8x03fhkRLabBFjODG5gXL6','default.png','2021-10-02 00:47:24','2021-10-02 00:47:24',0,''),(21,'Jonathan','Cespedes','jonathancespedes@gmail.com','$2a$10$zbijMrJT44PsRMfS6ReKm.wIFdZhD13oMe1Awl4UqgbmxZQFc2MES','default.png','2021-10-02 00:48:03','2021-10-02 00:48:03',0,''),(22,'Matias','Lopez','matiaslopez@gmail.com','$2a$10$7Xahul276OOUZCIWOslsfOUZY.U9A.uMk1/uA7okFevN4eLi6LT5C','default.png','2021-10-02 00:49:56','2021-10-02 00:49:56',0,''),(23,'comision7','formar','comision7@gmail.com','$2a$10$Puz/n/xqPauevFPVNDLepO/Sn6YfR3crAIRLLjJ89g.PFRl9gJl/i','default.png','2021-10-02 00:51:04','2021-10-02 00:51:04',0,''),(24,'password','123456','password123456@admin.com','$2a$10$jZjHMe3GsnOGSI98fqNcguaQQ6RtWQgAfqA3/xiZCE4blRNChIEs6','1633136031433_img_.gif','2021-10-02 00:51:57','2021-10-02 00:54:38',1,'12345678910'),(25,'Franco','Fernandez','francodel4to@gmail.com','$2a$10$QgW9g2oKRmEetMkpvwOaIe8jInyLtwib6tHpAUq8JvqJXEDHiyHXq','1634330664517_img_.jpg','2021-10-15 20:34:54','2021-10-15 20:44:24',0,'000000'),(26,'fran','eeaaa','aaaa@gmail.com','$2a$10$RbP7acfMHmpYRCWzdUfc3uaiDiQ1JHRFiJxU3NA6El4KTnCTY2P1i','default.png','2021-10-18 16:24:08','2021-10-18 16:24:08',0,''),(27,'grgerg','fernandez','aaaaa@gmail.com','$2a$10$YmMMWoXwpxugedKZmN9Suu6fqdxvsCr137/sg96kKNjtOjdgkrOva','default.png','2021-10-18 16:27:20','2021-10-18 16:27:20',0,''),(28,'ak','ad','azulhdhdh@gmail.com','$2a$10$FFFuSyTsEyIV8RIcOBlzPudIQyYj9clRjZntMNjceZvo8jGQ0Sw2y','default.png','2021-10-23 00:38:41','2021-10-23 00:38:41',0,'');
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

-- Dump completed on 2021-10-25 12:15:47
