<?php
if (session_status() != PHP_SESSION_ACTIVE) session_start();
if (!$_SESSION['signed_in']) {
  header("Location: /2/");
  exit;
}