/*
SQLyog Community v9.20 Beta2
MySQL - 5.5.5-10.1.13-MariaDB : Database - punretro
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`punretro` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `punretro`;

/*Table structure for table `boards` */

DROP TABLE IF EXISTS `boards`;

CREATE TABLE `boards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `slug` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `template` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `boards` */

insert  into `boards`(`id`,`name`,`slug`,`description`,`template`,`created_by`,`is_deleted`,`created_at`) values (1,'Release 2019/12/14','release-2019-12-14','This board is for realase 2019',1,1,0,'2020-01-03 14:15:17'),(2,'Release 2020/01/08','release-2020-01-08','This board is for realase 2020',1,1,0,'2020-01-03 14:15:17'),(3,'future board','future-board','this is board for future task',2,1,0,'2020-01-03 14:15:17'),(4,'Dummy board','dummy-board','this is demo board',2,1,0,'2020-01-03 14:16:04');

/*Table structure for table `posts` */

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(500) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `template_column_id` int(11) DEFAULT NULL,
  `board_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `posts` */

/*Table structure for table `template_columns` */

DROP TABLE IF EXISTS `template_columns`;

CREATE TABLE `template_columns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `slug` varchar(30) DEFAULT NULL,
  `template` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `template_columns` */

insert  into `template_columns`(`id`,`name`,`slug`,`template`,`is_deleted`) values (1,'Went Well','went-well',1,0),(2,'To Improve','to-improve',1,0),(3,'Action Items','action-items',1,0),(4,'Good','good',2,0),(5,'Bad','bad',2,0),(6,'Neutral','neutral',2,0);

/*Table structure for table `templates` */

DROP TABLE IF EXISTS `templates`;

CREATE TABLE `templates` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `key` varchar(50) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `templates` */

insert  into `templates`(`id`,`name`,`key`,`is_deleted`) values (1,'Default Retro','default-retro',0),(2,'Dummy','dummy',0);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(70) DEFAULT NULL,
  `password` varchar(70) DEFAULT NULL,
  `designation` varchar(50) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`email`,`password`,`designation`,`is_deleted`) values (1,'Hemant Sankhla','hemantsan@cybage.com','123456','Software Engineer (UI)',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
