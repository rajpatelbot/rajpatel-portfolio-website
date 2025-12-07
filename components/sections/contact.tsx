"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailto = `mailto:`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-mono text-sm">CONTACT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">{"Let's Work Together"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                Open for Upwork projects and global remote opportunities. If you have a project in mind or just want to
                chat, feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Find me on</p>
              <div className="flex items-center gap-4">
                <Link
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors group"
                  aria-label="GitHub Profile"
                >
                  <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </Link>
                <Link
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-secondary p-6 sm:p-8 rounded-lg border border-border h-max my-auto">
            <form onSubmit={handleSubmit} className="">
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                
                <Send className="mr-2 h-4 w-4" />
                Reach out to me
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
