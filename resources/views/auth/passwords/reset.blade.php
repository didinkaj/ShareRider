@extends('layouts.account')

@section('title')

<span id="extr-page-header-space"> <span class="hidden-xs-down">Need an account?</span> <a href="{{ route('register') }}" class="btn btn-danger">Create account</a> </span>

@endsection

@section('content')

<form method="POST" action="{{ route('password.request') }}" class="smart-form client-form">
@csrf
	<header>
		{{ __('Reset Password') }}
	</header>
	
    
    <fieldset>

<section>

<input type="hidden" name="token" value="{{ $token }}">


    <label class="label">{{ __('E-Mail Address') }}</label>
	<label class="input"> <i class="icon-append fa fa-envelope"></i>

        <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $email ?? old('email') }}" required autofocus>

        @if ($errors->has('email'))
            <span class="invalid-feedback">
                <strong>{{ $errors->first('email') }}</strong>
            </span>
        @endif
  
</section>

<section>
    <label class="label">{{ __('Password') }}</label>
	<label class="input"> <i class="icon-append fa fa-envelope"></i>

    <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

    @if ($errors->has('password'))
        <span class="invalid-feedback">
            <strong>{{ $errors->first('password') }}</strong>
        </span>
    @endif
   
</section>

<section>
	 <label class="label">{{ __('Confirm Password') }}</label>
	<label class="input"> <i class="icon-append fa fa-envelope"></i>
    
        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
    
</section>

<section>
	
	<footer>
		<button type="submit" class="btn btn-primary">
			<i class="fa fa-refresh"></i> {{ __('Reset Password') }}
		</button>
	</footer>
   
     
</section>
</fieldset>
</form>



@endsection
