CREATE TABLE "rooms" (
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"description" text,
	"name" text NOT NULL,
	"roomId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
);
