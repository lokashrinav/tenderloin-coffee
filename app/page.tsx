import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: 'Tenderloin Coffee | Best Coffee Shop in San Francisco',
  description: 'Visit Tenderloin Coffee in San Francisco for premium coffee, espresso drinks, and a cozy atmosphere. Located in the heart of the Tenderloin district.',
  keywords: 'coffee shop san francisco, tenderloin coffee, best coffee sf, cafe tenderloin, specialty coffee san francisco',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-neutral-900 text-white">
        <div className="text-center space-y-6 p-4">
          <h1 className="text-5xl md:text-7xl font-bold">Tenderloin Coffee</h1>
          <p className="text-xl md:text-2xl">Crafting Perfect Moments, One Cup at a Time</p>
          <Button className="bg-white text-black hover:bg-neutral-200 text-lg px-8 py-6">Visit Us Today</Button>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hours & Location</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p>Monday - Sunday</p>
              <p className="text-lg font-medium">9:00 AM - 5:00 PM</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p>Tenderloin District</p>
              <p>San Francisco, CA</p>
              <p className="mt-4">
                <a href="tel:5715256131" className="text-blue-600 hover:text-blue-800">(571) 525-6131</a>
              </p>
              <p>
                <a href="mailto:lokashrinav@gmail.com" className="text-blue-600 hover:text-blue-800">lokashrinav@gmail.com</a>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Espresso</h3>
              <p>Rich, bold, and perfectly extracted</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pour Over</h3>
              <p>Hand-crafted, single-origin excellence</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cold Brew</h3>
              <p>Smooth, refreshing, 24-hour brew</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <Card className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea className="w-full p-2 border rounded" rows={4}></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Tenderloin Coffee. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
