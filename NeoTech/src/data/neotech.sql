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
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(40) DEFAULT NULL,
  `pc` varchar(30) DEFAULT NULL,
  `country` varchar(40) DEFAULT NULL,
  `province` varchar(40) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `user_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_147` (`user_id`),
  CONSTRAINT `FK_145` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Sony'),(2,'HyperX'),(3,'Gigabyte'),(4,'Logitech'),(5,'Nintendo');
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
  `product_id` int(11) unsigned NOT NULL,
  `quantity` int(11) NOT NULL,
  `order_number` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_50` (`user_id`),
  KEY `fkIdx_53` (`product_id`),
  CONSTRAINT `FK_48` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_51` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Audio'),(2,'Teclado'),(3,'Mouse'),(4,'Monitores'),(5,'Gaming');
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
  `images` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `category_id` int(11) unsigned NOT NULL,
  `brand_id` int(11) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_100` (`brand_id`),
  KEY `fkIdx_90` (`category_id`),
  CONSTRAINT `FK_88` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_98` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'AU-MDRZ150','Auriculares sony con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos.','Negro y Rojo','default-image.png',9500,1,1,'2020-10-11 07:47:30','2020-10-28 00:11:54'),(2,'TC-RGB-100','HyperX sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductore','RGB','default-image.png',8000,1,1,'2020-11-22 09:27:28','2021-05-14 22:19:10'),(3,'TCM-G413',' El teclado mecánico para gaming G413 ofrece rendimiento sin igual con tecnologías y funciones avanzadas. Con interruptores Romer-G™ Tactile, usados por los Profesionales de eSports en todo el mundo, el G413 Proporciona velocidad, respuesta y resistencia únicas en su género.','RGB','default-image.png',8700,1,1,'2020-10-02 15:28:38','2021-05-07 02:24:52');
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
  `image` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_rol` tinyint(1) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Franco','Fernandez','franco@neotech.com','123456','default.png','2021-08-26 22:29:06','2021-09-04 13:33:54',1,'+46 158 641 5155'),(2,'Ariel','Andrade','ariel@neotech.com','123123','default.png','2021-05-04 10:37:49','2021-07-28 07:46:00',1,'+689 766 666 6940'),(3,'Mauricio','Maneyro','mauri@neotech.com','123123','default.png','2021-01-09 16:06:12','2021-06-18 06:02:08',1,'+86 409 945 2452'),(4,'Gale','Meneghelli','gmeneghelli3@weibo.com','G4gsl9UEi','default.png','2021-03-23 07:40:01','2021-07-15 19:33:22',0,'+86 189 929 3571'),(5,'Leesa','Halfhyde','lhalfhyde4@over-blog.com','SMnerTo','default.png','2021-06-21 01:31:43','2020-11-21 16:31:19',0,'+86 481 126 2813'),(6,'Danya','Duckels','dduckels5@forbes.com','Y0gZxB','default.png','2021-03-27 12:54:59','2021-03-23 10:51:30',0,'+86 427 216 8059'),(7,'Jaime','Posselow','jposselow6@barnesandnoble.com','yW03z34Bzd','default.png','2020-10-10 16:38:09','2021-04-10 05:30:31',0,'+234 116 825 7865'),(8,'Roda','Hawsby','rhawsby7@live.com','XVMOnAnNG','default.png','2021-03-14 02:59:18','2020-10-26 13:33:42',0,'+95 420 718 3181'),(9,'Paulie','Roads','proads8@mysql.com','Dl1IWOl','default.png','2020-11-25 19:53:24','2021-09-04 16:49:14',0,'+30 352 248 5208'),(10,'Francesco','Kuhl','fkuhl9@tuttocitta.it','eEVeVtEw8bOt','default.png','2021-09-13 07:43:39','2021-01-14 05:49:56',0,'+93 522 905 4341');
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

-- Dump completed on 2021-09-22 10:24:26
