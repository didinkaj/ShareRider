@extends('layouts.account')

@section('title')
<span id="extr-page-header-space"> <span class="hidden-xs-down">Already registered?</span> <a href="{{ route('login') }}" class="btn btn-danger">Sign In</a> </span>
@endsection

@section('content')

<form method="POST" action="{{ route('register') }}" id="smart-form-register" class="smart-form client-form">
                        @csrf
	<header>
		{{ __('Register') }}
	</header>

	<fieldset>
		
			
		
		<section>
			<label for="name" >{{ __('Name') }}</label>
			<label class="input"> <i class="icon-append fa fa-user"></i>
				<input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
				<b class="tooltip tooltip-bottom-right">Needed to enter the website</b> </label>
		</section>

		<section>
			<label for="email" >{{ __('E-Mail Address') }}</label>
			<label class="input"> <i class="icon-append fa fa-envelope"></i>
				<input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
				<b class="tooltip tooltip-bottom-right">Needed to verify your account</b> </label>
		</section>

		<section>
			<label for="password" >{{ __('Password') }}</label>
			<label class="input"> <i class="icon-append fa fa-lock"></i>
				 <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
				<b class="tooltip tooltip-bottom-right">Don't forget your password</b> </label>
		</section>

		<section>
			<label for="password-confirm" >{{ __('Confirm Password') }}</label>
			<label class="input"> <i class="icon-append fa fa-lock"></i>
				<input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
				<b class="tooltip tooltip-bottom-right">Don't forget your password</b> </label>
		</section>
	</fieldset>

	
	<footer>
		<button type="submit" class="btn btn-primary">
			{{ __('Register') }}
		</button>
	</footer>

	<div class="message">
		<i class="fa fa-check"></i>
		<p>
			Thank you for your registration!
		</p>
	</div>
</form>


@endsection
