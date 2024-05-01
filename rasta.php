<?php
// Assuming you have a database connection established already

// Query to get the items purchased by the customer
$sql = "SELECT product_name, quantity FROM cart_items WHERE customer_id = :customer_id";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':customer_id', $customer_id); // Assuming you have the customer's ID
$stmt->execute();
$items = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Format the items for display
$item_list = '';
foreach ($items as $item) {
    $item_list .= $item['product_name'] . ' (Quantity: ' . $item['quantity'] . '), ';
}

// Remove the trailing comma and space
$item_list = rtrim($item_list, ', ');

// Display the items in the input field
?>