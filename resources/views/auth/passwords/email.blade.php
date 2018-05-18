@extends('layouts.account')

@section('title')

<span id="extr-page-header-space"> <span class="hidden-mobile hidden-xs">Need an account?</span> <a href="{{ route('register') }}" class="btn btn-danger">Create account</a> </span>

@endsection

@section('content')      
                
                
<form method="POST" action="{{ route('password.email') }}" class="smart-form client-form">
@csrf
<header>
	{{ __('Reset Password') }}
</header>
	@if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif

	<fieldset>
		
		<section>
			<label class="label">{{ __('E-Mail Address') }}</label>
			<label class="input"> <i class="icon-append fa fa-envelope"></i>
				<input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                @if ($errors->has('email'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
				<b class="tooltip tooltip-top-right"><i class="fa fa-envelope txt-color-teal"></i> Please enter email address for password reset</b></label>
		</section>
		<!-- <section>
			<span class="timeline-seperator text-center text-primary"> <span class="font-sm">OR</span> 
		</section>
		<section>
			<label class="label">Your Username</label>
			<label class="input"> <i class="icon-append fa fa-user"></i>
				<input type="text" name="username">
				<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> Enter your username</b> </label>
			<div class="note">
				<a href="login.html">I remembered my password!</a>
			</div>
		</section> -->

	</fieldset>
	<footer>
		<button type="submit" class="btn btn-primary">
            {{ __('Send Password Reset Link') }}
        </button>
	</footer>
</form>
   
@endsection
