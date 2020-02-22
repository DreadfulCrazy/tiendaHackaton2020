-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2020 at 07:58 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `NIT` varchar(45) DEFAULT NULL,
  `logo_url` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `name`, `NIT`, `logo_url`) VALUES
(1, 'Tetra Pack', '123456', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `country_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`country_id`, `name`) VALUES
(1, 'Colombia');

-- --------------------------------------------------------

--
-- Table structure for table `country_ccy`
--

CREATE TABLE `country_ccy` (
  `tax_ex` int(11) NOT NULL,
  `currency_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country_ccy`
--

INSERT INTO `country_ccy` (`tax_ex`, `currency_id`, `country_id`) VALUES
(0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `currency_id` int(11) NOT NULL,
  `description` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `currencies`
--

INSERT INTO `currencies` (`currency_id`, `description`) VALUES
(1, 'Peso Colombiano');

-- --------------------------------------------------------

--
-- Table structure for table `hist_tax`
--

CREATE TABLE `hist_tax` (
  `tax_id` int(11) NOT NULL,
  `tax` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hist_tax`
--

INSERT INTO `hist_tax` (`tax_id`, `tax`, `date`, `country_id`) VALUES
(1, 19, '2020-02-22 13:51:14', 1);

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `invoice_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `paid` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`invoice_id`, `date`, `user_id`, `paid`) VALUES
(1, '2020-02-22 13:53:57', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `inv_details`
--

CREATE TABLE `inv_details` (
  `quantity` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `inv_details`
--

INSERT INTO `inv_details` (`quantity`, `invoice_id`, `product_id`) VALUES
(2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `payment_methods`
--

CREATE TABLE `payment_methods` (
  `pmethod_id` int(11) NOT NULL,
  `description` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payment_methods`
--

INSERT INTO `payment_methods` (`pmethod_id`, `description`) VALUES
(1, 'Efectivo'),
(2, 'Tarjeta de Crédito');

-- --------------------------------------------------------

--
-- Table structure for table `pay_inv_cur`
--

CREATE TABLE `pay_inv_cur` (
  `pic_id` int(11) NOT NULL,
  `amount` float NOT NULL,
  `pmethod_id` int(11) NOT NULL,
  `currency_id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pay_inv_cur`
--

INSERT INTO `pay_inv_cur` (`pic_id`, `amount`, `pmethod_id`, `currency_id`, `invoice_id`) VALUES
(1, 148.75, 1, 1, 1),
(2, 148.75, 2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `prd_str`
--

CREATE TABLE `prd_str` (
  `Prdstr_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `date` datetime NOT NULL,
  `product_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `unt_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `prd_str`
--

INSERT INTO `prd_str` (`Prdstr_id`, `price`, `date`, `product_id`, `store_id`, `unt_id`) VALUES
(1, 125, '2020-02-22 13:54:58', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `img_url` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `quantity`, `img_url`) VALUES
(1, 'Hit Frutas Tropicales', 'Jugo de frutas tropicales sin conservantes', 12, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rols`
--

CREATE TABLE `rols` (
  `rol_id` int(11) NOT NULL,
  `description` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rols`
--

INSERT INTO `rols` (`rol_id`, `description`) VALUES
(1, 'Cajero'),
(2, 'Proveedor');

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `store_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) DEFAULT NULL,
  `company_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`store_id`, `name`, `address`, `company_id`, `country_id`) VALUES
(1, 'Central Poblado', 'Poblado - Medellin', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `unts`
--

CREATE TABLE `unts` (
  `unt_id` int(11) NOT NULL,
  `description` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `unts`
--

INSERT INTO `unts` (`unt_id`, `description`) VALUES
(2, 'Kg'),
(1, 'Units');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `f_name`, `l_name`, `username`, `password`, `rol_id`) VALUES
(1, 'Pedro', 'Perez', 'pedro', '123', 1),
(2, 'Laura', 'Gomez', 'laura', '456', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `country_ccy`
--
ALTER TABLE `country_ccy`
  ADD PRIMARY KEY (`currency_id`,`country_id`),
  ADD KEY `fk_Country_ccy_Currencies1_idx` (`currency_id`),
  ADD KEY `fk_Country_ccy_Countries1_idx` (`country_id`);

--
-- Indexes for table `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`currency_id`);

--
-- Indexes for table `hist_tax`
--
ALTER TABLE `hist_tax`
  ADD PRIMARY KEY (`tax_id`),
  ADD KEY `fk_Hist_tax_Countries1_idx` (`country_id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`invoice_id`),
  ADD KEY `fk_Invoices_Users1_idx` (`user_id`);

--
-- Indexes for table `inv_details`
--
ALTER TABLE `inv_details`
  ADD PRIMARY KEY (`invoice_id`,`product_id`),
  ADD KEY `fk_inv_details_Invoices1_idx` (`invoice_id`),
  ADD KEY `fk_inv_details_Products1_idx` (`product_id`);

--
-- Indexes for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`pmethod_id`);

--
-- Indexes for table `pay_inv_cur`
--
ALTER TABLE `pay_inv_cur`
  ADD PRIMARY KEY (`pic_id`),
  ADD KEY `fk_Pay_inv_cur_Payment_methods1_idx` (`pmethod_id`),
  ADD KEY `fk_Pay_inv_cur_Currencies1_idx` (`currency_id`),
  ADD KEY `fk_Pay_inv_cur_Invoices1_idx` (`invoice_id`);

--
-- Indexes for table `prd_str`
--
ALTER TABLE `prd_str`
  ADD PRIMARY KEY (`Prdstr_id`),
  ADD KEY `fk_Prd_str_Products_idx` (`product_id`),
  ADD KEY `fk_Prd_str_Stores1_idx` (`store_id`),
  ADD KEY `fk_Prd_str_Unts1_idx` (`unt_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Indexes for table `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`rol_id`),
  ADD UNIQUE KEY `description_UNIQUE` (`description`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`store_id`),
  ADD UNIQUE KEY `country_id_UNIQUE` (`country_id`),
  ADD KEY `fk_Stores_Company1_idx` (`company_id`),
  ADD KEY `fk_Stores_Countries1_idx` (`country_id`);

--
-- Indexes for table `unts`
--
ALTER TABLE `unts`
  ADD PRIMARY KEY (`unt_id`),
  ADD UNIQUE KEY `description_UNIQUE` (`description`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `fk_Users_Rols1_idx` (`rol_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `currencies`
--
ALTER TABLE `currencies`
  MODIFY `currency_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hist_tax`
--
ALTER TABLE `hist_tax`
  MODIFY `tax_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `invoice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `pmethod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pay_inv_cur`
--
ALTER TABLE `pay_inv_cur`
  MODIFY `pic_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `prd_str`
--
ALTER TABLE `prd_str`
  MODIFY `Prdstr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rols`
--
ALTER TABLE `rols`
  MODIFY `rol_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `store_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `unts`
--
ALTER TABLE `unts`
  MODIFY `unt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `country_ccy`
--
ALTER TABLE `country_ccy`
  ADD CONSTRAINT `fk_Country_ccy_Countries1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`country_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Country_ccy_Currencies1` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`currency_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `hist_tax`
--
ALTER TABLE `hist_tax`
  ADD CONSTRAINT `fk_Hist_tax_Countries1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`country_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `fk_Invoices_Users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `inv_details`
--
ALTER TABLE `inv_details`
  ADD CONSTRAINT `fk_inv_details_Invoices1` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`invoice_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_inv_details_Products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pay_inv_cur`
--
ALTER TABLE `pay_inv_cur`
  ADD CONSTRAINT `fk_Pay_inv_cur_Currencies1` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`currency_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Pay_inv_cur_Invoices1` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`invoice_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Pay_inv_cur_Payment_methods1` FOREIGN KEY (`pmethod_id`) REFERENCES `payment_methods` (`pmethod_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `prd_str`
--
ALTER TABLE `prd_str`
  ADD CONSTRAINT `fk_Prd_str_Products` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Prd_str_Stores1` FOREIGN KEY (`store_id`) REFERENCES `stores` (`store_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Prd_str_Unts1` FOREIGN KEY (`unt_id`) REFERENCES `unts` (`unt_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `stores`
--
ALTER TABLE `stores`
  ADD CONSTRAINT `fk_Stores_Company1` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Stores_Countries1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`country_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_Users_Rols1` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`rol_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
