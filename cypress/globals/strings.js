export class Strings{
    title = "Amazon"
    email = "admin@admin.com"
    signIn = "Sign in"
    alertContentForEmailAsMandatory = "Enter your email or mobile phone number"
    invalidEmail = "a21q@gmail.com"
    validEmail = Cypress.env('AMAZON_EMAIL')
    alertContentForInvalidEmail = "We cannot find an account with that email address"
    passwordLabel = "Password"
    alertContentForPasswordAsMandatory = "Enter your password"
    invalidPassword = "Tester1"
    validPassword = Cypress.env('AMAZON_PWD')
    alertContentForInvalidPassword = "Your password is incorrect"
    userName = "Hasnain"
    signOut = "Sign Out"
    privacyNotice = "Privacy Notice"
    needHelp = "Need help?"
    privacyNoticePath = "/ref=ap_signin_notification_privacy_notice"
    conditionsOfUse = "Conditions of Use"
    conditionsOfUsePath = "/ref=ap_signin_notification_condition_of_use"
    forgotYourPassword = "Forgot your password?"
    forgotYourPasswordPath = "/forgotpassword"
    OtherSignInIssues = "Other issues with Sign-In"
    OtherSignInIssuesPath = "/account-issues"
    searchQuery = "Charles River Apparel Men's Crosswind"
    fsSearchQuery = "free size t shirt men"

}
