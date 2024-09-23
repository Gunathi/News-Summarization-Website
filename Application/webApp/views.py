from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib.auth import logout
from django.contrib import messages
from datetime import datetime
from .models import UserPreference, Message

#Sign up method
def signup(request):

    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirmPassword = request.POST['confirmPassword'] 
        
        if password == confirmPassword:
            if User.objects.filter(email=email).exists():
                messages.error(request, 'Email already taken')
                return redirect('signup')
            elif User.objects.filter(username = username).exists(): 
                messages.info(request, 'UserName alreday taken') 
                return redirect('signup')
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                # user.is_active = False

                # current_site = get_current_site(request)
                # mail_subject = 'Activate your account'
                # token = default_token_generator.make_token(user)
                # uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
                # message = render_to_string('email_confirmation.html', {
                #     'user': user,
                #     'domain': current_site.domain,
                #     'uidb64': uidb64,
                #     'token': token,
                # })
                # to_email = email
                # send_mail(mail_subject, message, settings.EMAIL_HOST_USER, [to_email])

                user.save()

                auth.login(request, user)
                messages.success(request, 'Account created successfully. Please Select Your Preferences.')
                return redirect('preferences')
            
        else:
            messages.error(request, 'Passwords do not match')
            return redirect('signup')
        
    else:
        return render(request, 'signup.html')
    
# def activate(request, uidb64, token):
#     try:
#         uid = force_str(urlsafe_base64_decode(uidb64))
#         user = User.objects.get(pk=uid)
#     except (TypeError, ValueError, OverflowError, User.DoesNotExist):
#         user = None

#     if user is not None and default_token_generator.check_token(user, token):
#         user.is_active = True
#         user.save()

#         if request.user.is_authenticated:
#             auth.login(request, user)
#             messages.success(request, 'Your account has been activated successfully.')
#             return redirect('home')
#         else:
#             messages.error(request, 'Unable to log you in automatically, please sign in.')
#             return redirect('preferences')
#     else:
#         messages.error(request, 'The activation link is invalid!')
#         return redirect('signup')

def signin(request):

    if request.method == 'POST':

        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        user = auth.authenticate(username=username, email=email, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('summarize')
        else:
            messages.info(request, 'Invalid User')
            return redirect('signin')
    else:
        return render(request, 'Sign-in.html') 
    
def logout_view(request):
    logout(request)
    return redirect('summarize')

current_date = datetime.now().strftime('%d %B, %Y') 

context = {
    "date": current_date
}

def about(request):
    return render(request, 'about.html', context)

def contact(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            name = request.POST.get('name')
            email = request.POST.get('email')
            phone_number = request.POST.get('number')
            subject = request.POST.get('subject')
            message_text = request.POST.get('message')

            Message.objects.create(
                user = request.user,
                name = name,
                email = email,
                phone_number = phone_number,
                subject = subject,
                message_text = message_text
            )

            return render(request, 'contact.html', context)
        else:
            messages.error(request, 'You need to log in to send a message.')
            return redirect('signin')
    else:
        return render(request, 'contact.html', context)

def preferences(request):

    if not request.user.is_authenticated:
        messages.error(request, 'Please log in to set your preferences.')
        return redirect('signin')

    user = request.user

    if UserPreference.objects.filter(user=user).exists():
        return redirect('summarize')

    if request.method == 'POST':
        preferences = request.POST.getlist('preference')

        UserPreference.objects.filter(user=user).delete()

        for preference in preferences:
            UserPreference.objects.create(user=user, preference=preference)
        return redirect('signin') 
    else:
        return render(request, 'preferences.html') 
    

def forgot(request):
    return render(request, 'forgotpassword.html')


