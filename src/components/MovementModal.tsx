import React, { useState, useEffect } from 'react';

// 1. Define the props interface for TypeScript
interface JoinMovementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Update component signature to use the defined props type
const JoinMovementModal: React.FC<JoinMovementModalProps> = ({ isOpen, onClose }) => {
  // Add state to control the card flip
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Effect to handle auto-closing after 3 seconds upon submission
  useEffect(() => {
    if (isSubmitted) {
      // Set a timer to close the modal after 3000ms (3 seconds)
      const timer = setTimeout(() => {
        onClose();
      }, 10000); 

      // Cleanup function to clear the timer if the modal is manually closed or unmounted
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose]); // Re-run effect only when isSubmitted or onClose changes

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission success by initiating the flip
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
        
        {/* Modal Container: Added perspective for 3D effect */}
        {/* FIX: Set a sufficient fixed height (580px) for the form side (when not submitted)
            to prevent container collapse. 400px works for the smaller "Thank You" side. */}
        <div 
          className="relative w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden card-perspective" 
          style={{ height: isSubmitted ? '400px' : '580px' }} 
        > 
          
          {/* Card Wrapper that performs the flip */}
          <div className={`w-full h-full card-flipper ${isSubmitted ? 'is-flipped' : ''}`}>

            {/* CARD FRONT (The Form) */}
            <div className="card-side card-front bg-gradient-to-br from-white via-gray-50 to-green-50 p-5 sm:p-8 border border-green-200">
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100/10 to-transparent pointer-events-none"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-green-200 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-300 rounded-full opacity-20 blur-2xl"></div>

              {/* Close Button (Visible on front side) */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-all duration-300 text-2xl font-light leading-none hover:scale-110 z-10"
                aria-label="Close"
              >
                &times;
              </button>

              {/* Title */}
              <h2 className="text-3xl font-extrabold text-green-700 mb-6 pt-1 text-center tracking-tight relative z-10">
                🌿 Join The Movement
              </h2>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 relative z-10">
                
                {/* Full Name */}
                <div>
                  <label className="label">👤 Full Name</label>
                  <input type="text" className="pillInput" placeholder="Enter your full name" required />
                </div>

                {/* Mobile */}
                <div>
                  <label className="label">📱 Mobile Number</label>
                  <input type="tel" className="pillInput" placeholder="e.g., +91 98765 43210" required />
                </div>

                {/* Gender */}
                <div className="flex flex-col">
                  <label className="label">⚧ Gender</label>
                  <div className="flex items-center gap-6 pt-1">
                    <label className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-green-600 transition-all duration-200">
                      <input type="radio" name="gender" className="form-radio text-green-600 w-4 h-4" value="female" required />
                      Female
                    </label>
                    <label className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-green-600 transition-all duration-200">
                      <input type="radio" name="gender" className="form-radio text-green-600 w-4 h-4" value="male" />
                      Male
                    </label>
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label className="label">🎂 Age</label>
                  <input type="number" min="16" max="99" className="pillInput" placeholder="Your age" required />
                </div>

                {/* Reason */}
                <div className="md:col-span-2">
                  <label className="label">💡 Reason for Joining</label>
                  <select className="pillInput" defaultValue="" required>
                    <option value="" disabled>Select your primary reason</option>
                    <option>Support the movement</option>
                    <option>Become a volunteer</option>
                    <option>Social awareness</option>
                    <option>Youth leadership</option>
                    <option>Community service</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-full font-bold text-lg tracking-wide transition-all duration-300 shadow-lg shadow-green-400/50 hover:shadow-green-500/70 hover:scale-[1.01] transform"
                  >
                    🚀 Submit & Join
                  </button>
                </div>
              </form>
            </div>


            {/* CARD BACK (Success Message) */}
            <div className="card-side card-back bg-gradient-to-br from-green-50 to-white/90 p-5 sm:p-8 flex flex-col justify-center items-center text-center">
                
                {/* Close Button (Visible on back side) */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-all duration-300 text-2xl font-light leading-none hover:scale-110 z-10"
                    aria-label="Close"
                >
                    &times;
                </button>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-green-500 mb-6 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                
                <h3 className="text-3xl font-extrabold text-green-700 mb-4">
                    Submission Received!
                </h3>
                
                {/* Updated Quote reflecting the movement's main motive */}
                <p className="text-gray-600 italic mb-8 max-w-sm">
                    "Your support strengthens our mission. Welcome to the movement."
                    <span className="block mt-2 font-semibold text-sm">— Voice of the Movement</span>
                </p>

                
            </div>

          </div> {/* End card-flipper */}
        </div> {/* End card-perspective */}
      </div>

      {/* Styles (CSS for Custom Tailwind Classes and Animations) */}
      <style>{` 
        /* --- CARD FLIP STYLES --- */
        .card-perspective {
            perspective: 1000px;
            transition: height 0.6s ease-in-out; /* Smooth height transition matching the flip */
        }

        .card-flipper {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s; /* The flip duration */
            transform-style: preserve-3d;
        }

        .card-flipper.is-flipped {
            transform: rotateY(180deg);
        }

        .card-side {
            position: absolute; 
            width: 100%;
            height: 100%;
            backface-visibility: hidden; /* Hide the back side during the flip */
            top: 0;
            left: 0;
            border-radius: 1.5rem; /* rounded-3xl */
        }

        .card-back {
            transform: rotateY(180deg);
            padding-top: 3rem; 
            padding-bottom: 3rem;
        }
        
        /* --- FORM STYLES (from previous iteration, now pure CSS) --- */
        .pillInput {
          width: 100%;
          padding: 0.75rem 1.25rem; /* py-3 px-5 (Compact) */
          margin-top: 0;
          border: 1px solid #d1d5db; /* border border-gray-300 (Softer border) */
          border-radius: 9999px; 
          background-color: rgba(255, 255, 255, 0.95);
          color: #1f2937;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
          outline: none;
          transition: all 300ms ease;
        }
        
        .pillInput:focus {
          border-color: #10b981; /* focus:border-green-500 */
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15); /* focus:ring-3 focus:ring-green-100 */
        }
        
        .label {
          color: #1f2937;
          font-weight: 600;
          font-size: 0.875rem; /* text-sm (Compact) */
          margin-bottom: 0.5rem; /* mb-2 */
          display: block;
        }

        /* Animation for smooth modal opening */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out; /* Slightly faster animation */
        }

        /* Radio button color styling */
        .form-radio:checked {
          background-color: #16a34a; /* Tailwind green-600 */
          border-color: #16a34a;
        }
      `}</style>
    </>
  );
};

export default JoinMovementModal;