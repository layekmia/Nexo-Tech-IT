"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Award className="h-16 w-16 text-primary mx-auto mb-6" />
        <h2 className="mb-4">Ready to Start Your Next Project?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Let's discuss how we can help transform your business with innovative
          software solutions.
        </p>
        <Button
          size="lg"
          onClick={() => onSectionChange("contact")}
          className="group"
        >
          Start Your Project Today
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
