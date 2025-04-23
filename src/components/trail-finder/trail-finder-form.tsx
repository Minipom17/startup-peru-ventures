
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

interface TrailFinderFormProps {
  onSubmit: (data: TrailQuery) => void;
  isLoading: boolean;
}

export interface TrailQuery {
  location: string;
  difficulty: string;
  time: string;
}

export function TrailFinderForm({ onSubmit, isLoading }: TrailFinderFormProps) {
  const [formData, setFormData] = useState<TrailQuery>({
    location: '',
    difficulty: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="shadow-md">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="Enter city, park or region"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="difficulty">Difficulty Level</Label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select difficulty</option>
                  <option value="easy">Easy - Minimal elevation gain</option>
                  <option value="moderate">Moderate - Some hills</option>
                  <option value="hard">Hard - Challenging terrain</option>
                  <option value="expert">Expert - Technical & steep</option>
                </select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="time">Available Time</Label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select time</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="90">1.5 hours</option>
                  <option value="120">2 hours</option>
                  <option value="180">3+ hours</option>
                </select>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-teal hover:bg-teal/90" disabled={isLoading}>
              {isLoading ? 'Finding trails...' : 'Find Running Trails'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
