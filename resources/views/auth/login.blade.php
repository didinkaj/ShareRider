@extends('layouts.account')

@section('title')

<span id="extr-page-header-space"> <span class="hidden-mobile hidden-xs">Need an account?</span> <a href="{{ route('register') }}" class="btn btn-danger">Create account</a> </span>

@endsection

@section('content')
<form method="POST" action="{{ route('login') }}" id="login-form" class="smart-form client-form">
	@csrf
	<header>
		{{ __('Login') }}
	</header>

	<fieldset>

		<section>
			<label class="label">{{ __('E-Mail Address') }}</label>
			<label class="input"> <i class="icon-append fa fa-user"></i>
				 <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
				<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> Please enter email address/username</b></label>
		</section>

		<section>
			<label class="label">{{ __('Password') }}</label>
			<label class="input"> <i class="icon-append fa fa-lock"></i>
				<input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
				<b class="tooltip tooltip-top-right"><i class="fa fa-lock txt-color-teal"></i> Enter your password</b> </label>
			<div class="note">
				<a href="{{ route('password.request') }}">{{ __('Forgot Your Password?') }}</a>
			</div>
		</section>

		<section>
			<label class="checkbox">
				<input type="checkbox" name="remember" checked="">
				<i></i>Stay signed in</label>
		</section>
	</fieldset>
	<footer>
		<button type="submit" class="btn btn-primary">
			 {{ __('Login') }}
		</button>
	</footer>
</form>

@endsection
