<?php
if (session_status() != PHP_SESSION_ACTIVE) session_start();
if (!$_SESSION['signed_in']) {
  header("Location: /1/index_old.php");
  exit;
}