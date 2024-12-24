# Inconsistent Expo Constants.deviceId: Returns null or empty string

This repository demonstrates a bug in Expo's `Constants.deviceId` API where it inconsistently returns `null` or an empty string, particularly when the app is in the background or after a restart. This behavior can disrupt features that rely on unique device identification.

## Bug Description

The `Constants.deviceId` API is expected to return a unique device identifier. However, in certain scenarios, this API fails to return a reliable identifier, rendering it unreliable for critical functionalities like user authentication, analytics, and push notifications.

## Reproduction Steps

1. Run the `bug.js` example.
2. Observe the output of `Constants.deviceId`.
3. Minimize the app or restart the device. Observe the changes in the output.
4. Run the app again and observe how the id changes and might become null or an empty string.

## Solution

The `bugSolution.js` file provides a potential solution that involves storing the device ID in asynchronous storage (AsyncStorage) upon initial retrieval.  This ensures that even if the device ID is lost temporarily, it's preserved and available for later use.

## Note

The solution is not perfect and might need adjustments depending on your app's specific requirements and how frequently it's killed by the OS or the user.  Ideally, Expo should improve the consistency of `Constants.deviceId`. Consider exploring alternative methods like using a secure server-side solution for generating and managing unique user identifiers.