# 🐾 Pet Shop Mobile App

A React Native (Expo) based mobile application that allows users to
upload pet details, view pets, and manage a shopping cart using global
state management.

## 📱 Platform

-   React Native (Expo)
-   Android & iOS

## 🚀 Features

-   Upload pet image (Camera / Gallery)
-   Form validation (Zod)
-   API integration (POST & GET)
-   Add/remove cart items
-   Zustand global state

## 🛠️ Setup

``` bash
npm install
npx expo start
```

Scan QR with Expo Go.

## 📦 Libraries

-   expo
-   react-navigation
-   zustand
-   axios
-   zod
-   react-hook-form
-   expo-image-picker

## 🧠 Architecture

Feature-based structure with separation of UI, state, and services.

## 🌐 APIs

-   POST: https://reqres.in/api/users
-   GET: https://dog.ceo/api/breeds/image/random

## ❓ Why APIs

-   ReqRes: mock API for testing
-   Dog API: dynamic images

## ⚠️ Note

ReqRes may block requests; app handles failures gracefully.

## ✨ Highlights

-   Clean architecture
-   Validation
-   State management
