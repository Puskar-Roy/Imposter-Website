import mongoose, { Schema, model, models } from 'mongoose';

interface IAnalytics {
  total: number;
  windows: number;
  mac: number;
  linux: number;
  lastUpdated: Date;
}

const AnalyticsSchema = new Schema<IAnalytics>({
  total: { type: Number, default: 0 },
  windows: { type: Number, default: 0 },
  mac: { type: Number, default: 0 },
  linux: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Since we only want one document for global analytics, we can use a fixed ID or just check for the first document
const Analytics = models.Analytics || model<IAnalytics>('Analytics', AnalyticsSchema);

export default Analytics;
