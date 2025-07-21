// src/pages/Contact.tsx
export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> hello@localquote.ai
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> +27 71 234 5678
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> Cape Town, South Africa
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}