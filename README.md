# FixedPicker
Custom React Native Picker Component.


How to use it ?
=> 1. Add this FixedPicker.js file in your project src or create a new js file in and copy this code into it. 
2. Replace Picker with FixedPicker wherever used.


What is it?
=> This Custom Picker Component is an extension of React Native Picker component.


What was the need of this component ?
=> Some Android 10+ Devices like OnePlus, RealMe, MI, etc. are facing issues with the React Native Picker Component. This Component Fixes that issue.


What is the issue happening in the above specified devices ?
=> Picker component has an attribute called onValueChange which should only be invoked if the value is changed. But in the above specified devices the callback event for onValueChange is called during onComponentMount itself.


How this issue was fixed ?
=> The native Picker does not handle edits of existing Picker.Items. For example, if you edit the selected Picker.Item, it will lose the selected value. This fixes that.
