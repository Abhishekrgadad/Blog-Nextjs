import React from 'react';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
     <div className="flex justify-center items-center p-8">
        <SignIn/>
     </div>
  )
};

