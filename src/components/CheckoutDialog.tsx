import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useApp } from '../contexts/AppContext';
import { MapPin, Plus, CreditCard, Wallet, Building, CheckCircle2, Truck } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CheckoutDialog({ open, onOpenChange }: CheckoutDialogProps) {
  const { cart, addresses, addAddress, selectedAddress, setSelectedAddress, clearCart, user } = useApp();
  const [step, setStep] = useState<'address' | 'payment' | 'confirmation'>('address');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const [newAddress, setNewAddress] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    type: 'Home' as 'Home' | 'Work' | 'Other',
    isDefault: false,
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = total > 500 ? 0 : 40;
  const gst = Math.round(total * 0.05);
  const grandTotal = total + deliveryFee + gst;

  const handleAddAddress = () => {
    if (!newAddress.street || !newAddress.city || !newAddress.state || !newAddress.pincode) {
      toast.error('Please fill all address fields');
      return;
    }
    addAddress(newAddress);
    setShowAddressForm(false);
    toast.success('Address added successfully');
    setNewAddress({
      name: user?.name || '',
      phone: user?.phone || '',
      street: '',
      city: '',
      state: '',
      pincode: '',
      type: 'Home',
      isDefault: false,
    });
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      toast.error('Please select a delivery address');
      return;
    }
    if (!paymentMethod) {
      toast.error('Please select a payment method');
      return;
    }
    
    setOrderPlaced(true);
    setStep('confirmation');
    
    setTimeout(() => {
      clearCart();
      setSelectedAddress(null);
      setOrderPlaced(false);
      setStep('address');
      setPaymentMethod('');
      onOpenChange(false);
      toast.success('Order placed successfully! 🎉');
    }, 3000);
  };

  const handleContinueToPayment = () => {
    if (!selectedAddress && addresses.length === 0) {
      toast.error('Please add a delivery address');
      return;
    }
    if (!selectedAddress) {
      toast.error('Please select a delivery address');
      return;
    }
    setStep('payment');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {step === 'address' && 'Delivery Address'}
            {step === 'payment' && 'Payment Method'}
            {step === 'confirmation' && 'Order Confirmation'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto pr-2 -mr-2">{/* Scrollable content wrapper */}

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`flex items-center gap-2 ${step === 'address' ? 'text-[#FF8A00]' : 'text-[#32C96E]'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'address' ? 'bg-[#FF8A00] text-white' : 'bg-[#32C96E] text-white'
            }`}>
              {step === 'address' ? '1' : <CheckCircle2 className="w-5 h-5" />}
            </div>
            <span className="text-sm">Address</span>
          </div>
          <div className="flex-1 h-1 bg-gray-200 mx-2">
            <div className={`h-full transition-all ${step !== 'address' ? 'bg-[#32C96E]' : 'bg-gray-200'}`} />
          </div>
          <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-[#FF8A00]' : step === 'confirmation' ? 'text-[#32C96E]' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'payment' ? 'bg-[#FF8A00] text-white' : 
              step === 'confirmation' ? 'bg-[#32C96E] text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              {step === 'confirmation' ? <CheckCircle2 className="w-5 h-5" /> : '2'}
            </div>
            <span className="text-sm">Payment</span>
          </div>
          <div className="flex-1 h-1 bg-gray-200 mx-2">
            <div className={`h-full transition-all ${step === 'confirmation' ? 'bg-[#32C96E]' : 'bg-gray-200'}`} />
          </div>
          <div className={`flex items-center gap-2 ${step === 'confirmation' ? 'text-[#FF8A00]' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'confirmation' ? 'bg-[#FF8A00] text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              3
            </div>
            <span className="text-sm">Confirm</span>
          </div>
        </div>

        {/* Address Step */}
        {step === 'address' && (
          <div>
            {!showAddressForm ? (
              <>
                <div className="space-y-3 mb-4">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      onClick={() => setSelectedAddress(address.id)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedAddress === address.id
                          ? 'border-[#FF8A00] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <MapPin className={`w-5 h-5 mt-1 ${selectedAddress === address.id ? 'text-[#FF8A00]' : 'text-gray-400'}`} />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{address.name}</span>
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded">{address.type}</span>
                            </div>
                            <p className="text-sm text-gray-600">{address.street}</p>
                            <p className="text-sm text-gray-600">{address.city}, {address.state} - {address.pincode}</p>
                            <p className="text-sm text-gray-500 mt-1">{address.phone}</p>
                          </div>
                        </div>
                        {selectedAddress === address.id && (
                          <CheckCircle2 className="w-5 h-5 text-[#32C96E]" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button
                  onClick={() => setShowAddressForm(true)}
                  variant="outline"
                  className="w-full border-dashed border-2 border-[#FF8A00] text-[#FF8A00] hover:bg-orange-50 mb-4"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Address
                </Button>

                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <h4 className="font-medium mb-3">Order Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Items ({cart.length})</span>
                      <span>₹{total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span className={deliveryFee === 0 ? 'text-[#32C96E]' : ''}>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GST (5%)</span>
                      <span>₹{gst}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between text-lg">
                      <span>Total</span>
                      <span className="text-[#32C96E]">₹{grandTotal}</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleContinueToPayment}
                  className="w-full bg-gradient-to-r from-[#FF8A00] to-[#32C96E] hover:opacity-90 h-12"
                >
                  Continue to Payment
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={newAddress.phone}
                      onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                      placeholder="Enter phone"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="street">Street Address</Label>
                  <Input
                    id="street"
                    value={newAddress.street}
                    onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                    placeholder="House no., Building name, Street"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                      placeholder="Pincode"
                    />
                  </div>
                </div>

                <div>
                  <Label>Address Type</Label>
                  <RadioGroup value={newAddress.type} onValueChange={(value) => setNewAddress({ ...newAddress, type: value as 'Home' | 'Work' | 'Other' })}>
                    <div className="flex gap-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Home" id="home" />
                        <Label htmlFor="home">Home</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Work" id="work" />
                        <Label htmlFor="work">Work</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => setShowAddressForm(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddAddress}
                    className="flex-1 bg-gradient-to-r from-[#FF8A00] to-[#32C96E] hover:opacity-90"
                  >
                    Save Address
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Payment Step */}
        {step === 'payment' && (
          <div>
            <div className="space-y-3 mb-6">
              <div
                onClick={() => setPaymentMethod('upi')}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  paymentMethod === 'upi' ? 'border-[#FF8A00] bg-orange-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      paymentMethod === 'upi' ? 'bg-[#FF8A00]/10' : 'bg-gray-100'
                    }`}>
                      <Wallet className={`w-6 h-6 ${paymentMethod === 'upi' ? 'text-[#FF8A00]' : 'text-gray-600'}`} />
                    </div>
                    <div>
                      <p className="font-medium">UPI Payment</p>
                      <p className="text-sm text-gray-500">Pay using Google Pay, PhonePe, Paytm</p>
                    </div>
                  </div>
                  {paymentMethod === 'upi' && <CheckCircle2 className="w-5 h-5 text-[#32C96E]" />}
                </div>
              </div>

              <div
                onClick={() => setPaymentMethod('card')}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'border-[#FF8A00] bg-orange-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      paymentMethod === 'card' ? 'bg-[#FF8A00]/10' : 'bg-gray-100'
                    }`}>
                      <CreditCard className={`w-6 h-6 ${paymentMethod === 'card' ? 'text-[#FF8A00]' : 'text-gray-600'}`} />
                    </div>
                    <div>
                      <p className="font-medium">Credit/Debit Card</p>
                      <p className="text-sm text-gray-500">Visa, Mastercard, Rupay accepted</p>
                    </div>
                  </div>
                  {paymentMethod === 'card' && <CheckCircle2 className="w-5 h-5 text-[#32C96E]" />}
                </div>
              </div>

              <div
                onClick={() => setPaymentMethod('netbanking')}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  paymentMethod === 'netbanking' ? 'border-[#FF8A00] bg-orange-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      paymentMethod === 'netbanking' ? 'bg-[#FF8A00]/10' : 'bg-gray-100'
                    }`}>
                      <Building className={`w-6 h-6 ${paymentMethod === 'netbanking' ? 'text-[#FF8A00]' : 'text-gray-600'}`} />
                    </div>
                    <div>
                      <p className="font-medium">Net Banking</p>
                      <p className="text-sm text-gray-500">All major banks supported</p>
                    </div>
                  </div>
                  {paymentMethod === 'netbanking' && <CheckCircle2 className="w-5 h-5 text-[#32C96E]" />}
                </div>
              </div>

              <div
                onClick={() => setPaymentMethod('cod')}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  paymentMethod === 'cod' ? 'border-[#FF8A00] bg-orange-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      paymentMethod === 'cod' ? 'bg-[#FF8A00]/10' : 'bg-gray-100'
                    }`}>
                      <Truck className={`w-6 h-6 ${paymentMethod === 'cod' ? 'text-[#FF8A00]' : 'text-gray-600'}`} />
                    </div>
                    <div>
                      <p className="font-medium">Cash on Delivery</p>
                      <p className="text-sm text-gray-500">Pay when you receive</p>
                    </div>
                  </div>
                  {paymentMethod === 'cod' && <CheckCircle2 className="w-5 h-5 text-[#32C96E]" />}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h4 className="font-medium mb-3">Order Summary</h4>
              <div className="space-y-2 text-sm mb-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({cart.length})</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className={deliveryFee === 0 ? 'text-[#32C96E]' : ''}>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (5%)</span>
                  <span>₹{gst}</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg">
                  <span>Total</span>
                  <span className="text-[#32C96E]">₹{grandTotal}</span>
                </div>
              </div>
              
              {selectedAddress && (
                <div className="border-t pt-3 mt-3">
                  <p className="text-sm text-gray-600 mb-1">Delivering to:</p>
                  <p className="text-sm font-medium">{addresses.find(a => a.id === selectedAddress)?.name}</p>
                  <p className="text-sm text-gray-600">{addresses.find(a => a.id === selectedAddress)?.street}</p>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep('address')}
                variant="outline"
                className="flex-1"
              >
                Back
              </Button>
              <Button
                onClick={handlePlaceOrder}
                className="flex-1 bg-gradient-to-r from-[#FF8A00] to-[#32C96E] hover:opacity-90 h-12"
              >
                Place Order - ₹{grandTotal}
              </Button>
            </div>
          </div>
        )}

        {/* Confirmation Step */}
        {step === 'confirmation' && (
          <div className="text-center py-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#FF8A00] to-[#32C96E] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl mb-2">Order Placed Successfully!</h3>
            <p className="text-gray-600 mb-6">Your order will be delivered soon</p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left max-w-md mx-auto">
              <h4 className="font-medium mb-4">Order Details</h4>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm text-[#32C96E]">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between text-lg">
                  <span>Total Paid</span>
                  <span className="text-[#32C96E]">₹{grandTotal}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500">Redirecting to home page...</p>
          </div>
        )}
        
        </div>{/* End scrollable content wrapper */}
      </DialogContent>
    </Dialog>
  );
}
