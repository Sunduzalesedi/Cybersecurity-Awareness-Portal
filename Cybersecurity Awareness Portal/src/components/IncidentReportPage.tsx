import { AlertCircle, Upload, Send, CheckCircle, MessageCircle, X, FileText, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { useState, useRef } from 'react';

export function IncidentReportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    incidentType: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', department: '', incidentType: '', description: '' });
      setUploadedFiles([]);
    }, 5000);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    if (extension === 'png' || extension === 'jpg' || extension === 'jpeg') {
      return <ImageIcon className="h-5 w-5 text-teal-500" />;
    }
    return <FileText className="h-5 w-5 text-teal-500" />;
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <h1 className="text-white text-4xl mb-4">Report a Security Incident</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Report suspicious emails, files, or behavior instantly. Your report helps protect everyone in the organization. All reports are confidential and reviewed by our security team.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="bg-yellow-500/10 border-yellow-600 mb-8">
          <AlertCircle className="h-4 w-4 text-yellow-500" />
          <AlertDescription className="text-yellow-200">
            <strong>Emergency?</strong> For immediate security emergencies, call our hotline: <span className="text-yellow-400">1-800-SECURE-NOW</span>
          </AlertDescription>
        </Alert>

        {/* Submission Success Message */}
        {submitted && (
          <Alert className="bg-teal-500/10 border-teal-600 mb-8">
            <CheckCircle className="h-4 w-4 text-teal-500" />
            <AlertDescription className="text-teal-200">
              <strong>Report Submitted Successfully!</strong> Our security team has been notified and will investigate immediately. You'll receive a confirmation email with a ticket number shortly.
            </AlertDescription>
          </Alert>
        )}

        {/* Report Form */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Incident Details</CardTitle>
            <CardDescription className="text-slate-400">
              Please provide as much information as possible to help us respond quickly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">
                    Your Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    required
                  />
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-slate-300">
                    Department <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="e.g., Marketing, IT, Finance"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    required
                  />
                </div>
              </div>

              {/* Incident Type */}
              <div className="space-y-2">
                <Label htmlFor="incident-type" className="text-slate-300">
                  Incident Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.incidentType}
                  onValueChange={(value) => setFormData({ ...formData, incidentType: value })}
                  required
                >
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select incident type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phishing">Phishing Email</SelectItem>
                    <SelectItem value="malware">Suspected Malware</SelectItem>
                    <SelectItem value="data-breach">Potential Data Breach</SelectItem>
                    <SelectItem value="unauthorized-access">Unauthorized Access</SelectItem>
                    <SelectItem value="lost-device">Lost/Stolen Device</SelectItem>
                    <SelectItem value="suspicious-activity">Suspicious Activity</SelectItem>
                    <SelectItem value="social-engineering">Social Engineering Attempt</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-slate-300">
                  Incident Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Please describe what happened, when you noticed it, and any other relevant details..."
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[150px]"
                  required
                />
                <p className="text-slate-500 text-sm">
                  Include details like: sender email addresses, suspicious links, time of occurrence, affected systems, etc.
                </p>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file-upload" className="text-slate-300">
                  Attach Evidence (Optional)
                </Label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-teal-600 transition-colors cursor-pointer"
                >
                  <Upload className="h-10 w-10 text-slate-500 mx-auto mb-3" />
                  <p className="text-slate-400 mb-1">Click to upload or drag and drop</p>
                  <p className="text-slate-500 text-sm">PNG, JPEG, PDF, MSG files (Max 10MB per file)</p>
                  <input
                    ref={fileInputRef}
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf,.msg"
                    multiple
                    onChange={handleFileSelect}
                  />
                </div>

                {/* Display uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-lg p-3"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {getFileIcon(file.name)}
                          <div className="flex-1 min-w-0">
                            <p className="text-slate-300 text-sm truncate">{file.name}</p>
                            <p className="text-slate-500 text-xs">{formatFileSize(file.size)}</p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveFile(index)}
                          className="text-slate-400 hover:text-red-500 hover:bg-red-500/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-6"
                  disabled={submitted}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Report to Security Team
                </Button>
              </div>

              <p className="text-slate-500 text-sm text-center">
                Your report will be reviewed within 15 minutes during business hours
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-slate-700 text-black hover:bg-slate-800 hover:text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            Need Help Reporting?
          </Button>
          <p className="text-slate-500 text-sm mt-3">
            Not sure if something is suspicious? When in doubt, report it. It's always better to be safe.
          </p>
        </div>

        {/* Quick Tips */}
        <div className="mt-12">
          <h2 className="text-white text-2xl mb-6 text-center">What Should I Report?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white text-lg">Suspicious Emails</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 text-sm">
                <ul className="space-y-2">
                  <li>• Unexpected attachments</li>
                  <li>• Requests for credentials</li>
                  <li>• Urgent payment requests</li>
                  <li>• Unusual sender addresses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white text-lg">System Issues</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 text-sm">
                <ul className="space-y-2">
                  <li>• Unusual pop-ups</li>
                  <li>• Slow performance</li>
                  <li>• Unknown programs</li>
                  <li>• Unexpected restarts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white text-lg">Security Concerns</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 text-sm">
                <ul className="space-y-2">
                  <li>• Lost devices</li>
                  <li>• Unauthorized access</li>
                  <li>• Data exposure</li>
                  <li>• Suspicious calls/visits</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
