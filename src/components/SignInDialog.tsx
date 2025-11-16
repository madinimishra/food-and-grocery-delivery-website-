import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { toast } from 'sonner@2.0.3';

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignInDialog({ open, onOpenChange }: SignInDialogProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { setUser } = useApp();

  const handleSignIn = () => {
    if (!name || !email || !phone) {
      toast.error('Please fill all fields');
      return;
    }
    setUser({ name, email, phone });
    toast.success(`Welcome, ${name}!`);
    onOpenChange(false);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign In to QuickBite</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Name</label>
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Phone</label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSignIn}
            className="w-full bg-gradient-to-r from-[#FF8A00] to-[#32C96E] hover:opacity-90"
          >
            Sign In
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
