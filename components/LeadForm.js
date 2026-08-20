"use client";

import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  propertyAddress: "",
  apn: "",
  acreage: "",
  reason: "",
  details: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <span className="material-symbols-outlined text-warm-clay text-5xl mb-4">task_alt</span>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Thank You!</h3>
        <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
          We've received your information and will reach out with a no-obligation cash offer within 48 hours.
        </p>
        <button
          className="mt-8 bg-deep-forest text-on-primary px-8 py-3 rounded font-label-caps text-label-caps hover:bg-primary transition-colors active:scale-95"
          onClick={() => setStatus("idle")}
        >
          Submit Another Property
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
        <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field
          label="Property Address / County & State"
          name="propertyAddress"
          value={form.propertyAddress}
          onChange={handleChange}
          placeholder="e.g. 123 Rural Rd or Smith County, TX"
          required
        />
        <Field label="APN (Assessor's Parcel Number)" name="apn" value={form.apn} onChange={handleChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Approximate Acreage" name="acreage" value={form.acreage} onChange={handleChange} required />
        <div>
          <label className="block font-label-caps text-label-caps text-slate-stone mb-1.5">Reason for Selling</label>
          <select
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full bg-soft-sand border-b border-slate-stone/20 border-t-0 border-x-0 focus:ring-0 focus:border-warm-clay transition-colors py-3 px-4 text-body-md text-on-surface rounded-t"
          >
            <option value="">Select a reason...</option>
            <option value="taxes">Tired of paying property taxes</option>
            <option value="inherited">Inherited, no use for it</option>
            <option value="cash">Need cash for other investments</option>
            <option value="plans_changed">Plans changed, not building</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block font-label-caps text-label-caps text-slate-stone mb-1.5">Additional Details</label>
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
          rows={4}
          placeholder="Any features, access issues, or history we should know about?"
          className="w-full bg-soft-sand border-b border-slate-stone/20 border-t-0 border-x-0 focus:ring-0 focus:border-warm-clay transition-colors py-3 px-4 text-body-md text-on-surface resize-none rounded-t"
        />
      </div>

      {status === "error" && (
        <p className="font-body-sm text-body-sm text-error text-center">{error}</p>
      )}

      <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-deep-forest text-on-primary px-10 py-4 rounded font-label-caps text-label-caps hover:bg-primary transition-colors active:scale-95 w-full sm:w-auto text-center disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Get Your Free Valuation"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false, placeholder }) {
  return (
    <div>
      <label className="block font-label-caps text-label-caps text-slate-stone mb-1.5">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        className="w-full bg-soft-sand border-b border-slate-stone/20 border-t-0 border-x-0 focus:ring-0 focus:border-warm-clay transition-colors py-3 px-4 text-body-md text-on-surface rounded-t"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
